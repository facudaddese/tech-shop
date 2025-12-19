import './MainLayout.css'
import Novedades from '../Novedades/Novedades'
import Destacados from '../Destacados/Destacados'
import Categorias from '../Categorias/Categorias'

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