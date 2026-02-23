import { Link } from 'react-router-dom'
import CartWidget from '../cartWidget/CartWidget'
import './Header.css'

const Header = ({ titulo, busqueda, handleBusqueda, location }) => {

    return (
        <header className='header'>
            <h1 className='title-principal'><Link className='link-title' to={"/"}>{titulo}</Link></h1>
            <div className='carrito-container'>
                <input disabled={location.pathname === "/contacto"} type="text" placeholder={`${location.pathname === '/' ? "Buscar novedades y productos destacados" : location.pathname === '/notebooks' ? "Buscar notebooks" : location.pathname === '/productos' ? "Buscar productos" : "Búsqueda no disponible"}`} className='input-busqueda' value={busqueda} onChange={handleBusqueda} />
                <CartWidget />
            </div>
        </header>
    )
}

export default Header