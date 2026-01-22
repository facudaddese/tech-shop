import monitorG5 from '../../assets/destacados/monitorGamer.jpg'
import monitorG9 from '../../assets/destacados/monitorGamer2.jpg'
import notebook from '../../assets/destacados/notebook.jpg'
import sillaGamer from '../../assets/destacados/sillaGamer.jpg'
import sillaGamer2 from '../../assets/destacados/sillaGamer2.jpg'
import tecladoMecanico from '../../assets/destacados/tecladoMecanico.jpg'

const Destacados = ({ titulo }) => {
    return (
        <section className="layout-container">
            <h2 className='layout-title'>{titulo}</h2>
            <div className="grid-container">
                <div className='flex-container'>
                    <div className='description-container'>
                        <img src={monitorG5} alt="Monitor Gamer" />
                        <div className='flex-item'>
                            <h3 className='title-flex-item'>Monitor Gamer Samsung Odyssey G5 G50SF 27"</h3>
                            <strong>$777.000</strong>
                        </div>
                    </div>
                    <div className='btn-container'>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className="description-container">
                        <img src={monitorG9} alt="Monitor Gamer" />
                        <div className="flex-item">
                            <h3 className='title-flex-item'>Monitor Gamer Samsung Odyssey G9 G91F 49"</h3>
                            <strong>$1.700.000</strong>
                        </div>
                    </div>
                    <div className='btn-container'>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className="description-container">
                        <img src={notebook} alt="Notebook ASUS" />
                        <div className="flex-item">
                            <h3 className='title-flex-item'>Notebook ASUS Vivobook Go 15 15.6"</h3>
                            <strong>$750.000</strong>
                        </div>
                    </div>
                    <div className='btn-container'>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className="description-container">
                        <img src={sillaGamer} alt="Silla gamer negro y verde" />
                        <div className="flex-item">
                            <h3 className='title-flex-item'>Silla Gamer Razer Negro y Verde</h3>
                            <strong>$470.000</strong>
                        </div>
                    </div>
                    <div className='btn-container'>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className="description-container">
                        <img src={tecladoMecanico} alt="Teclado mecanico" />
                        <div className="flex-item">
                            <h3 className='title-flex-item'>Teclado Mecanico SteelSeries Apex 7 OLED</h3>
                            <strong>$183.000</strong>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button>Agregar al carrito</button>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className="description-container">
                        <img src={sillaGamer2} alt="Silla gamer gris" />
                        <div className='flex-item'>
                            <h3 className='title-flex-item'>Silla Gamer Razer Iskur V2 X 2D</h3>
                            <strong>$465.000</strong>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Destacados