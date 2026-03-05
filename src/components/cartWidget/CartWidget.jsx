import "./CartWidget.css"
import { useContext } from "react"
import { CartContext } from "../cartContext/CartContext"
import { useToastify } from '../../hooks/useToastify'

const CartWidget = ({ modalCart, handleModalCart, children }) => {

    const { carrito, handleDelete, handleSumarCart, handleRestarCart } = useContext(CartContext);

    const { success } = useToastify();
    const hadleBtnFinalizar = () => { success("Compra finalizada!") }

    return (
        <>
            <span className="material-symbols-outlined carrito" onClick={handleModalCart}>shopping_cart</span>
            <strong>{carrito.length > 0 && carrito.length}</strong>
            <div className={`cart-container ${modalCart ? "active" : ""}`}>
                {
                    carrito.length > 0 &&
                    <div className="close-cart">
                        <span className="material-symbols-outlined" onClick={handleModalCart}>close</span>
                    </div>
                }
                {
                    carrito.map((item) => (
                        <div className="cart-modal" key={item.id}>
                            <img src={item.img} alt="" style={{ width: "70px" }} />
                            <div className="info-item">
                                <h4>{item.nombre}</h4>
                                <strong>${item.precio.toLocaleString("es-AR")}</strong>
                            </div>
                            <div className="contador-carrito">
                                <button onClick={() => handleRestarCart(item)}>-</button>
                                <span>{item.cantidad}</span>
                                <button onClick={() => handleSumarCart(item)}>+</button>
                            </div>
                            <div className="btn-eliminar-item" onClick={() => handleDelete(item.id)}>
                                <span className="material-symbols-outlined">delete</span>
                            </div>
                        </div>
                    ))
                }
                {
                    carrito.length > 0 &&
                    <div className="btn-finalizar" onClick={hadleBtnFinalizar}>
                        <strong>Subtotal: ${carrito.reduce((acum, item) => acum + (item.precio * item.cantidad), 0).toLocaleString("es-AR")}</strong>
                        {children}
                    </div>
                }
            </div>
        </>
    )
}

export default CartWidget