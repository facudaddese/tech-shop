import './Footer.css'
import gmailLogo from '../../assets/logo-gmail.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <h2 className='title-footer'>Información de contacto</h2>
            <div className="iconos-container">
                <a href="https://github.com/facudaddese?tab=repositories" target="_blank" rel="noopener noreferrer" className='ancor'><i className="devicon-github-original icono"></i></a>
                <a href="https://www.linkedin.com/in/facundodaddese/" target="_blank" rel="noopener noreferrer" className='ancor'><i className="devicon-linkedin-plain icono"></i></a>
                <a href="mailto:facundo.daddese19@gmail.com"><img src={gmailLogo} alt="Logo de Gmail" className='icono-gmail' /></a>
            </div>
            <p className='parrafo'>&copy; Facundo D'Addese | {new Date().getFullYear()}.</p>
        </footer>
    )
}

export default Footer