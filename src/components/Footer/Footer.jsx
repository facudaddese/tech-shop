import './Footer.css'
import gmailLogo from '../../assets/logo-gmail.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <h3 className='title-footer'>Contacto del desarrollador</h3>
            <div className="iconos-container">
                <img src={gmailLogo} alt="Logo de Gmail" className='icono-gmail' />
                <i className="devicon-github-original icono"></i>
                <i className="devicon-linkedin-plain icono"></i>
            </div>
            <p className='parrafo'>e-commerce desarrollado por Facundo D'Addese | 2025.</p>
        </footer>
    )
}

export default Footer