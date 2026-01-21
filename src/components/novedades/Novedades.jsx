import auriculares from '../../assets/novedades/auriculares.jpg'
import auriculares2 from '../../assets/novedades/auriculares2.jpg'
import microfono from '../../assets/novedades/microfono.jpg'
import mousePad from '../../assets/novedades/mousePad.jpg'
import mouseWhite from '../../assets/novedades/mouseWhite.jpg'
import tecladoMecanico from '../../assets/novedades/tecladoMecanico.jpg'

const Novedades = () => {
    return (
        <section className="layout-container">
            <h2 className='layout-title'>Conocé nuestras últimas novedades</h2>
            <div className="grid-container">
                <div className='flex-container'>
                    <div className="description-container">
                        <img src={auriculares} alt="Auriculares 2.4Ghz" />
                        <div className="flex-item">
                            <h2>Auriculares Corsair 2.4Ghz Bluetooth</h2>
                            <strong>$705.000</strong>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button>Agregar al carrito</button>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className="description-container">
                        <img src={microfono} alt="Microfono Razer" />
                        <div className="flex-item">
                            <h2>Microfono Razer Seiren V3 Chroma RGB Black</h2>
                            <strong>$177.500</strong>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button>Agregar al carrito</button>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className="description-container">
                        <img src={auriculares2} alt="Auriculares 2.4Ghz" />
                        <div className="flex-item">
                            <h2>Auriculares Corsair Void V2 Elite Wireless 2.4Ghz</h2>
                            <strong>$216.000</strong>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button>Agregar al carrito</button>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className="description-container">
                        <img src={mousePad} alt="Mouse Pad" />
                        <div className="flex-item">
                            <h2>Mouse Pad Logitech G POWERPLAY 2 Carga Inalambrica</h2>
                            <strong>$242.000</strong>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button>Agregar al carrito</button>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className="description-container">
                        <img src={tecladoMecanico} alt="Teclado mecanico RGB" />
                        <div className="flex-item">
                            <h2>Teclado Mecanico Corsair RGB</h2>
                            <strong>$243.000</strong>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button>Agregar al carrito</button>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className="description-container">
                        <img src={mouseWhite} alt="Mouse blanco" />
                        <div className='flex-item'>
                            <h2>Mouse Razer DeathAdder White Cableado</h2>
                            <strong>$30.400</strong>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Novedades