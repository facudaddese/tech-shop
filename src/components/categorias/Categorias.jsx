import './Categorias.css'
import procesador from '../../assets/categorias/procesador.jpg'
import gabinete from '../../assets/categorias/gabinete.jpg'
import monitor from '../../assets/categorias/monitor.jpg'
import periferico from '../../assets/categorias/periferico.jpg'
import notebook from '../../assets/categorias/notebook.jpg'
import ram from '../../assets/categorias/ram.jpg'
import placaVideo from '../../assets/categorias/placaVideo.jpg'
import ItemCategoria from '../mainCategorias/MainCategorias'

const Categorias = ({ titulo }) => {
    return (
        <section className='layout-container'>
            <h2 className='layout-title'>{titulo}</h2>
            <div className="grid-container-categorias">
                <ItemCategoria containerClass={'procesador-container'} img={procesador} alt={'Procesador'} imgClass={'procesador'} divClass={'nombre-container'} titleClass={'title-categoria'} titulo={'Procesadores'} />

                <ItemCategoria containerClass={'monitor-container'} img={monitor} alt={'Monitor'} imgClass={'monitor'} divClass={'nombre-container'} titleClass={'title-categoria'} titulo={'Monitores'} />

                <ItemCategoria containerClass={'periferico-container'} img={periferico} alt={'Periferico'} imgClass={'periferico'} divClass={'nombre-container'} titleClass={'title-categoria'} titulo={'Periféricos'} />

                <ItemCategoria containerClass={'notebook-container'} img={notebook} alt={'MeNotebook'} imgClass={'notebook'} divClass={'nombre-container'} titleClass={'title-categoria'} titulo={'Notebooks'} />

                <ItemCategoria containerClass={'ram-container'} img={ram} alt={'Memoria RAM'} imgClass={'ram'} divClass={'nombre-container'} titleClass={'title-categoria'} titulo={'Memorias RAM'} />

                <ItemCategoria containerClass={'gabinete-container'} img={gabinete} alt={'Gabinete'} imgClass={'gabinete'} divClass={'nombre-container'} titleClass={'title-categoria'} titulo={'Gabinetes'} />

                <ItemCategoria containerClass={'placa-container'} img={placaVideo} alt={'Placa de video'} imgClass={'placa-container'} divClass={'nombre-container'} titleClass={'title-categoria'} titulo={'Placas de video'} />
            </div>
        </section>
    )
}

export default Categorias