import { usePromise } from '../../hooks/usePromise'
import { getProductos } from '../../services/getProductos'
import data from '../../data/productos.json'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'

const Destacados = ({ titulo, busqueda, onClick }) => {

    let { id } = useParams();
    const { productos } = usePromise(() => getProductos(data));
    const destacados = [...productos]
        .filter(el => el.id >= 7 && el.id <= 12 && el.nombre.toLowerCase().includes(busqueda.toLowerCase()));

    //filtro por el id que pase el usuario como parametro
    const productoId = destacados.filter(el => el.id === parseInt(id));

    return (
        <section className="layout-container">
            <h2 className='layout-title'>{titulo}</h2>
            <div className="grid-container">
                {
                    productoId.length > 0 ? <ItemList productos={productoId} onClick={onClick} /> : <ItemList productos={destacados} onClick={onClick} />
                }
            </div>
        </section >
    )
}

export default Destacados