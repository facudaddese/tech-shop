import './Productos.css'
import { usePromise } from '../../hooks/usePromise';
import ItemList from '../itemList/ItemList';
import { getProductos } from '../../services/getProductos';
import data from '../../data/productos.json'
import { useParams } from 'react-router-dom';

const Productos = ({ busqueda, onClick }) => {

    let { id } = useParams();
    const { productos } = usePromise(() => getProductos(data));

    const items = [...productos] //copia de los productos porque sort modifica el array original
        .filter(el => el.categoria !== "notebook" && el.id >= 13 && el.nombre.toLowerCase().includes(busqueda.toLowerCase())) //filtramos los productos donde categoria !== notebook y id >= 13
        .sort((a, b) => a.precio - b.precio) //ordenamos los productos por precio, de menor a mayor

    //filtro por el id que pase el usuario como parametro
    const itemId = items.filter(el => el.id === parseInt(id));

    return (
        <div className="productos-container">
            {
                itemId.length > 0 ? <ItemList productos={itemId} onClick={onClick} /> : <ItemList productos={items} onClick={onClick} />
            }
        </div>
    )
}

export default Productos
