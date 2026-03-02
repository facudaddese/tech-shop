import { useContext } from 'react';
import './ItemDetail.css'
import { CartContext } from '../cartContext/CartContext';

const ItemDetail = ({ itemSeleccionado, children, onClick }) => {

    const { carrito, handleSumarCantidad, handleRestarCantidad, agregarAlCarrito, cantidad } = useContext(CartContext);

    //Calculo el stock: stock inicial - (si existe el producto) cantidad a comprar
    const productoEnCarrito = carrito.find((producto) => producto.id === itemSeleccionado.id);
    const stockDisponible = itemSeleccionado.stock - (productoEnCarrito?.cantidad || 0);

    return (
        <div className="item-detail-container">
            <div className="cerrar-modal">
                <span className="material-symbols-outlined" onClick={onClick}>close</span>
            </div>
            <div className="item-detail">
                <div className="img-detail-container">
                    <img src={itemSeleccionado.img} alt={itemSeleccionado.nombre} />
                </div>
                <div className="item-detail-info">
                    <h2>{itemSeleccionado.nombre}</h2>
                    <p>{itemSeleccionado.descripcion}</p>
                    <strong>${itemSeleccionado.precio}</strong>
                    <p style={{ fontWeight: "bold", color: stockDisponible > 0 ? "#21C22C" : "#DC2626" }}>{stockDisponible > 0 ? `Stock disponible: ${stockDisponible}` : "Sin stock"}</p>
                    {
                        stockDisponible > 0 &&
                        <div className="btns-carrito">
                            <div className='btn-agregar' onClick={() => agregarAlCarrito(itemSeleccionado)}>
                                {children}
                            </div>
                            <div className="contador-container">
                                <button onClick={handleRestarCantidad} className='resta'>-</button>
                                <span>{cantidad}</span>
                                <button onClick={() => handleSumarCantidad(stockDisponible)} className='suma'>+</button>
                            </div>
                        </div>
                    }
                </div>
            </div >
        </div >
    )
}

export default ItemDetail
