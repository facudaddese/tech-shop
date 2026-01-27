import monitorG5 from '../../assets/destacados/monitorGamer.jpg'
import monitorG9 from '../../assets/destacados/monitorGamer2.jpg'
import notebook from '../../assets/destacados/notebook.jpg'
import sillaGamer from '../../assets/destacados/sillaGamer.jpg'
import sillaGamer2 from '../../assets/destacados/sillaGamer2.jpg'
import tecladoMecanico from '../../assets/destacados/tecladoMecanico.jpg'
import MainProductos from '../itemsMainProductos/ItemsMainProductos'

const Destacados = ({ titulo }) => {
    return (
        <section className="layout-container">
            <h2 className='layout-title'>{titulo}</h2>
            <div className="grid-container">
                <MainProductos containerClass={'flex-container'} divClass={'description-container'} img={monitorG5} alt={'Monitor Gamer'} itemClass={'flex-item'} titleClass={'title-flex-item'} title={'Monitor Gamer Samsung Odyssey G5 G50SF 27"'} strong={'$777.000'} />

                <MainProductos containerClass={'flex-container'} divClass={'description-container'} img={monitorG9} alt={'Monitor Gamer'} itemClass={'flex-item'} titleClass={'title-flex-item'} title={'Monitor Gamer Samsung Odyssey G9 G91F 49"'} strong={'$1.700.000'} />

                <MainProductos containerClass={'flex-container'} divClass={'description-container'} img={notebook} alt={'Notebook Asus'} itemClass={'flex-item'} titleClass={'title-flex-item'} title={'Notebook ASUS Vivobook Go 15 15.6"'} strong={'$750.000'} />

                <MainProductos containerClass={'flex-container'} divClass={'description-container'} img={sillaGamer} alt={'Silla gamer negro y verde'} itemClass={'flex-item'} titleClass={'title-flex-item'} title={'Silla Gamer Razer Negro y Verde'} strong={'$470.000'} />

                <MainProductos containerClass={'flex-container'} divClass={'description-container'} img={tecladoMecanico} alt={'Teclado mecanico'} itemClass={'flex-item'} titleClass={'title-flex-item'} title={'Teclado Mecanico SteelSeries Apex 7 OLED'} strong={'$183.000'} />

                <MainProductos containerClass={'flex-container'} divClass={'description-container'} img={sillaGamer2} alt={'Silla gamer gris'} itemClass={'flex-item'} titleClass={'title-flex-item'} title={'Silla Gamer Razer Iskur V2 X 2D'} strong={'$465.000'} />
            </div>
        </section >
    )
}

export default Destacados