import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ titulo }) => {

    let active = ({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
    });

    return (
        <>
            <header className='header'>
                <div className='container-principal'>
                    <h1 className='title-principal'><Link className='link-title' to={"/"}>{titulo}</Link></h1>
                    <input type="text" placeholder='Buscar productos' className='input-busqueda' />
                </div>
                <div className='carrito-container'>
                    <span className="material-symbols-outlined carrito">shopping_cart</span>
                    <strong>0</strong>
                </div>
            </header>
            <nav className='nav-bar'>
                <ul className='ul'>
                    <li><NavLink style={active} className='link' to={"/productos"}>Productos</NavLink></li>
                    <li><NavLink style={active} className='link' to={"/notebooks"}>Notebooks</NavLink></li>
                    <li><NavLink style={active} className='link' to={"/contacto"}>Contacto</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar