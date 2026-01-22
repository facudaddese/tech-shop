import auriculares from '../../assets/novedades/auriculares.jpg'
import auriculares2 from '../../assets/novedades/auriculares2.jpg'
import microfono from '../../assets/novedades/microfono.jpg'
import mousePad from '../../assets/novedades/mousePad.jpg'
import mouseWhite from '../../assets/novedades/mouseWhite.jpg'
import tecladoMecanico from '../../assets/novedades/tecladoMecanico.jpg'

const Novedades = ({ titulo }) => {
    return (
        <section className="layout-container">
            <h2 className='layout-title'>{titulo}</h2>
            <div className="grid-container">
                <div className='flex-container'>
                    <div className="description-container">
                        <img src={auriculares} alt="Auriculares 2.4Ghz" />
                        <div className="flex-item">
                            <h3 className='title-flex-item'>Auriculares Corsair 2.4Ghz Bluetooth</h3>
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
                            <h3 className='title-flex-item'>Microfono Razer Seiren V3 Chroma RGB Black</h3>
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
                            <h3 className='title-flex-item'>Auriculares Corsair Void V2 Elite Wireless 2.4Ghz</h3>
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
                            <h3 className='title-flex-item'>Mouse Pad Logitech G POWERPLAY 2 Carga Inalambrica</h3>
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
                            <h3 className='title-flex-item'>Teclado Mecanico Corsair RGB</h3>
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
                            <h3 className='title-flex-item'>Mouse Razer DeathAdder White Cableado</h3>
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