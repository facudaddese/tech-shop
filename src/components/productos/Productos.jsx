import './Productos.css'
import { useFetch } from '../../hooks/useFetch'

const Productos = () => {

    const { productos } = useFetch();

    return (
        <>
            <div className="productos-container">
                {
                    productos
                        .filter(el => el.categoria !== "notebook")
                        .sort((a, b) => a.precio - b.precio)
                        .map((producto) => (
                            <div key={producto.id} className='flex-container'>
                                <div className="description-container">
                                    <img src={producto.img} alt={producto.nombre} />
                                    <div className="flex-item">
                                        <h3 className='title-flex-item'>{producto.nombre}</h3>
                                        <strong>${producto.precio}</strong>
                                    </div>
                                </div>
                                <div className='btn-container'>
                                    <button>Agregar al carrito</button>
                                </div>
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default Productos