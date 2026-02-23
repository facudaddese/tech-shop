import { usePromise } from '../../hooks/usePromise';
import ItemList from '../itemList/ItemList';
import { getProductos } from '../../services/getProductos';
import data from '../../data/productos.json'
import { useParams } from 'react-router-dom';

const Notebooks = ({ busqueda, onClick }) => {

    let { id } = useParams();
    const { productos } = usePromise(() => getProductos(data));

    const notebooks = [...productos] //copia de los productos porque sort modifica el array original
        .filter(el => el.categoria === "notebook" && el.nombre.toLowerCase().includes(busqueda.toLowerCase())) //filtramos los productos donde categoria === notebook
        .sort((a, b) => a.precio - b.precio) //ordenamos las notebooks por precio, de menor a mayor

    //filtro por el id que pase el usuario como parametro
    const notebookId = notebooks.filter(el => el.id === parseInt(id));

    return (
        <div className="productos-container">
            {
                notebookId.length > 0 ? <ItemList productos={notebookId} onClick={onClick} /> : <ItemList productos={notebooks} onClick={onClick} />
            }
        </div>
    )
}

export default Notebooks