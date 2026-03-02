import { useContext } from "react"
import { CartContext } from "../cartContext/CartContext"

const Item = ({ img, alt, title, precio, children, producto, id }) => {

    const { carrito } = useContext(CartContext);
    const item = carrito.find((prod) => prod.id === id);

    return (
        <div className='flex-container' style={{ opacity: item ? item.cantidad === item.stock && .65 : 1 }} >
            <div className='description-container'>
                <img src={img} alt={alt} style={{ width: !producto ? '40%' : 'auto' }} />
                <div className='flex-item'>
                    <h3 className='title-flex-item'>{title}</h3>
                    <strong>{precio}</strong>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Item