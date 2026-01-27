import auriculares from '../../assets/novedades/auriculares.jpg'
import auriculares2 from '../../assets/novedades/auriculares2.jpg'
import microfono from '../../assets/novedades/microfono.jpg'
import mousePad from '../../assets/novedades/mousePad.jpg'
import mouseWhite from '../../assets/novedades/mouseWhite.jpg'
import tecladoMecanico from '../../assets/novedades/tecladoMecanico.jpg'
import MainProductos from '../itemsMainProductos/ItemsMainProductos'

const Novedades = ({ titulo }) => {
    return (
        <section className="layout-container">
            <h2 className='layout-title'>{titulo}</h2>
            <div className="grid-container">
                <MainProductos containerClass={'flex-container'} divClass={'description-container'} img={auriculares} alt={'Auriculares 2.4Ghz'} itemClass={'flex-item'} titleClass={'title-flex-item'} title={'Auriculares Corsair 2.4Ghz Bluetooth'} strong={'$705.000'} />

                <MainProductos containerClass={'flex-container'} divClass={'description-container'} img={microfono} alt={'Microfono Razer'} itemClass={'flex-item'} titleClass={'title-flex-item'} title={'Microfono Razer Seiren V3 Chroma RGB Black'} strong={'$177.500'} />

                <MainProductos containerClass={'flex-container'} divClass={'description-container'} img={auriculares2} alt={'Auriculares 2.4Ghz'} itemClass={'flex-item'} titleClass={'title-flex-item'} title={'Auriculares Corsair Void V2 Elite Wireless 2.4Ghz'} strong={'$216.000'} />

                <MainProductos containerClass={'flex-container'} divClass={'description-container'} img={mousePad} alt={'Mouse Pad'} itemClass={'flex-item'} titleClass={'title-flex-item'} title={'Mouse Pad Logitech G POWERPLAY 2 Carga Inalambrica'} strong={'$242.000'} />

                <MainProductos containerClass={'flex-container'} divClass={'description-container'} img={tecladoMecanico} alt={'Teclado mecanico RGB'} itemClass={'flex-item'} titleClass={'title-flex-item'} title={'Teclado Mecanico Corsair RGB'} strong={'$243.000'} />

                <MainProductos containerClass={'flex-container'} divClass={'description-container'} img={mouseWhite} alt={'Mouse blanco'} itemClass={'flex-item'} titleClass={'title-flex-item'} title={'Mouse Razer DeathAdder White Cableado'} strong={'$30.400'} />
            </div>
        </section>
    )
}


export default Novedades