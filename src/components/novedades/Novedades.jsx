import { usePromise } from '../../hooks/usePromise'
import { getProductos } from '../../services/getProductos'
import data from '../../data/productos.json'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'

const Novedades = ({ titulo, busqueda, onClick }) => {

    let { id } = useParams();
    const { productos } = usePromise(() => getProductos(data));
    const novedades = [...productos]
        .filter(el => el.id >= 1 && el.id <= 6 && el.nombre.toLowerCase().includes(busqueda.toLowerCase()));

    //filtro por el id que pase el usuario como parametro
    const novedadId = novedades.filter(el => el.id === parseInt(id));

    return (
        <section className="layout-container" style={{ display: titulo ? 'block' : 'none' }}>
            <h2 className='layout-title'>{titulo}</h2>
            <div className="grid-container">
                {
                    novedadId.length > 0 ? <ItemList productos={novedadId} onClick={onClick} /> : <ItemList productos={novedades} onClick={onClick} />
                }
            </div>
        </section>
    )
}

export default Novedades