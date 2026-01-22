import './Categorias.css'
import procesador from '../../assets/categorias/procesador.jpg'
import gabinete from '../../assets/categorias/gabinete.jpg'
import monitor from '../../assets/categorias/monitor.jpg'
import periferico from '../../assets/categorias/periferico.jpg'
import notebook from '../../assets/categorias/notebook.jpg'
import ram from '../../assets/categorias/ram.jpg'
import placaVideo from '../../assets/categorias/placaVideo.jpg'

const Categorias = ({ titulo }) => {
    return (
        <section className='layout-container'>
            <h2 className='layout-title'>{titulo}</h2>
            <div className="grid-container-categorias">
                <div className="procesador-container">
                    <img src={procesador} alt="Procesador" className='procesador' />
                    <div className='nombre-container'>
                        <p className='title-categoria'>Procesadores</p>
                    </div>
                </div>
                <div className="monitor-container">
                    <img src={monitor} alt="Monitor" className='monitor' />
                    <div className='nombre-container'>
                        <p className='title-categoria'>Monitores</p>
                    </div>
                </div>
                <div className="periferico-container">
                    <img src={periferico} alt="Periferico" className='periferico' />
                    <div className='nombre-container'>
                        <p className='title-categoria'>Periféricos</p>
                    </div>
                </div>
                <div className="notebook-container">
                    <img src={notebook} alt="Notebook" className='notebook' />
                    <div className='nombre-container'>
                        <p className='title-categoria'>Notebooks</p>
                    </div>
                </div>
                <div className="ram-container">
                    <img src={ram} alt="Memoria RAM" className='ram' />
                    <div className='nombre-container'>
                        <p className='title-categoria'>Memorias RAM</p>
                    </div>
                </div>
                <div className="gabinete-container">
                    <img src={gabinete} alt="Gabinete" className='gabinete' />
                    <div className='nombre-container'>
                        <p className='title-categoria'>Gabinetes</p>
                    </div>
                </div>
                <div className="placa-container">
                    <img src={placaVideo} alt="Placa de video" className='placa' />
                    <div className='nombre-container'>
                        <p className='title-categoria'>Placas de video</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categorias