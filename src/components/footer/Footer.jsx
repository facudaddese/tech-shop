import './Footer.css'
import gmailLogo from '../../assets/logo-gmail.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="iconos-container">
                <a href="https://github.com/facudaddese?tab=repositories" target="_blank" rel="noopener noreferrer" className='ancor'><i className="devicon-github-original icono"></i></a>
                <a href="https://www.linkedin.com/in/facundodaddese/" target="_blank" rel="noopener noreferrer" className='ancor'><i className="devicon-linkedin-plain icono"></i></a>
                <a href="mailto:facundo.daddese19@gmail.com"><img src={gmailLogo} alt="Logo de Gmail" className='icono-gmail' /></a>
            </div>
            <p className='parrafo'>&copy;{new Date().getFullYear()} TechShop | Desarrollado por Facundo D'Addese.</p>
        </footer>
    )
}

export default Footer