import './MainLayout.css'
import Novedades from '../novedades/Novedades'
import Destacados from '../destacados/Destacados'
import Categorias from '../categorias/Categorias'

const MainLayout = () => {

    return (
        <main>
            <Novedades titulo={"Conocé nuestras últimas novedades"} />
            <Destacados titulo={"Conocé nuestros productos destacados"} />
            <Categorias titulo={"Explorá nuestras categoría"} />
        </main>
    )
}

export default MainLayout