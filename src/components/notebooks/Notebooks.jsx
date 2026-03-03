import { usePromise } from '../../hooks/usePromise';
import ItemList from '../itemList/ItemList';
import { getProductos } from '../../services/getProductos';
import data from '../../data/productos.json'
import { useParams } from 'react-router-dom'
import { PuffLoader } from "react-spinners"

const Notebooks = ({ busqueda, onClick }) => {

    let { id } = useParams();
    const { productos, loading } = usePromise(() => getProductos(data));

    const notebooks = [...productos] //copia de los productos porque sort modifica el array original
        .filter(el => el.categoria === "notebook" && el.nombre.toLowerCase().includes(busqueda.toLowerCase())) //filtramos los productos donde categoria === notebook
        .sort((a, b) => a.precio - b.precio) //ordenamos las notebooks por precio, de menor a mayor

    //filtro por el id que pase el usuario como parametro
    const notebookId = notebooks.filter(el => el.id === parseInt(id));

    if (loading) return <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}><PuffLoader color="#000" /></div>
    
    return (
        <div className="productos-container">
            {
                notebookId.length > 0 ? <ItemList productos={notebookId} onClick={onClick} /> : <ItemList productos={notebooks} onClick={onClick} />
            }
            {
                busqueda &&
                <section className="not-found">
                    {
                        notebooks.length === 0 &&
                        <p style={{ textAlign: "center", fontWeight: "bold", display: "flex", margin: "auto", fontSize: "25px" }}>No hay resultados para tu búsqueda</p>
                    }
                </section>
            }
        </div>
    )
}

export default Notebooks