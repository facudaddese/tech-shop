import './MainLayout.css'
import Novedades from '../novedades/Novedades'
import Destacados from '../destacados/Destacados'
import { usePromise } from '../../hooks/usePromise'
import { getProductos } from '../../services/getProductos'
// import { useProductos } from '../../hooks/useProductos'
// import Categorias from '../categorias/Categorias'
import data from '../../data/productos.json'

const MainLayout = ({ busqueda, onClick }) => {

    const { productos } = usePromise(() => getProductos(data));
    const novedades =
        productos.filter(el => el.id >= 1 && el.id <= 6 && el.nombre.toLowerCase().includes(busqueda.toLowerCase())).length > 0;
    const destacados =
        productos.filter(el => el.id >= 7 && el.id <= 12 && el.nombre.toLowerCase().includes(busqueda.toLowerCase())).length > 0;

    return (
        <main>
            {
                novedades && <Novedades titulo={"Conocé nuestras últimas novedades"} onClick={onClick} busqueda={busqueda} />
            }
            {
                destacados && <Destacados titulo={"Conocé nuestros productos destacados"} onClick={onClick} busqueda={busqueda} />
            }
            {/* <Categorias titulo={"Explorá nuestras categoría"} /> */}
        </main>
    )
}

export default MainLayout