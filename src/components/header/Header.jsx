import { Link } from 'react-router-dom'
import CartWidget from '../cartWidget/CartWidget'
import './Header.css'
import Button from '../button/Button'

const Header = ({ titulo, busqueda, handleBusqueda, location, modalCart, handleModalCart }) => {

    return (
        <header className='header'>
            <h1 className='title-principal'><Link className='link-title' to={"/"}>{titulo}</Link></h1>
            <div className='carrito-container'>
                <input disabled={location.pathname === "/contacto"} type="text" placeholder={`${location.pathname === '/' ? "Buscar novedades y destacados" : location.pathname === '/notebooks' ? "Buscar notebooks" : location.pathname === '/productos' ? "Buscar productos" : "Búsqueda no disponible"}`} className='input-busqueda' value={busqueda} onChange={handleBusqueda} />
                <CartWidget modalCart={modalCart} handleModalCart={handleModalCart} >
                    <Button btn={"Finalizar compra"} />
                </CartWidget>
            </div>
        </header>
    )
}

export default Header