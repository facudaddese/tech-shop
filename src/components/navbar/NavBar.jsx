import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

    let active = ({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
    });

    return (
        <nav className='nav-bar'>
            <ul className='ul'>
                <li><NavLink style={active} className='link' to={"/productos"}>Productos</NavLink></li>
                <li><NavLink style={active} className='link' to={"/notebooks"}>Notebooks</NavLink></li>
                <li><NavLink style={active} className='link' to={"/contacto"}>Contacto</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar