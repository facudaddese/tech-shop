import './NavBar.css'

const NavBar = ({ titulo }) => {
    return (
        <>
            <header className='header'>
                <div className='container-principal'>
                    <h1 className='title-principal'>{titulo}</h1>
                    <input type="text" placeholder='Buscar productos' className='input-busqueda' />
                </div>
                <div className='carrito-container'>
                    <span className="material-symbols-outlined carrito">shopping_cart</span>
                    <strong>1</strong>
                </div>
            </header>
            <nav className='nav-bar'>
                <ul className='ul'>
                    <li>Productos</li>
                    <li>Notebooks</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar