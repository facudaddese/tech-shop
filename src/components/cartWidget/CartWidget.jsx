import { useContext } from "react"
import { CartContext } from "../cartContext/CartContext"

const CartWidget = () => {

    const { carrito } = useContext(CartContext);

    return (
        <>
            <span className="material-symbols-outlined carrito">shopping_cart</span>
            <strong>{carrito.length > 0 && carrito.length}</strong>
        </>
    )
}

export default CartWidget