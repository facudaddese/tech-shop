import './Productos.css'
import { useFetch } from '../../hooks/useFetch'
import ItemsProductos from '../ItemsProductos/ItemsProductos';

const Productos = () => {

    const { productos } = useFetch();

    return (
        <>
            <div className="productos-container">
                {
                    productos
                        .filter(el => el.categoria !== "notebook") //filtramos toos los producto, menos las notebooks
                        .sort((a, b) => a.precio - b.precio) //ordenamos los producots por precio, de menor a mayor
                        .map((producto) => (
                            <ItemsProductos key={producto.id} containerClass={'flex-container'} divClass={'description-container'} img={producto.img} alt={producto.nombre} containerTitleClass={'flex-item'} titleClass={'title-flex-item'} title={producto.nombre} precio={`$${producto.precio}`} />
                        ))
                }
            </div>
        </>
    )
}

export default Productos