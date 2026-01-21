import './MainLayout.css'
import Novedades from '../novedades/Novedades'
import Destacados from '../destacados/Destacados'
import Categorias from '../categorias/Categorias'

const MainLayout = () => {

    return (
        <main>
            <Novedades />
            <Destacados />
            <Categorias />
        </main>
    )
}

export default MainLayout