import Button from '../button/Button'
import Item from '../item/Item'

const ItemList = ({ productos, onClick }) => {
    return (
        <>
            {
                productos.map((producto) => (
                    <div data-aos="flip-right" key={producto.id}>
                        <Item img={producto.img} alt={producto.nombre} title={producto.nombre} precio={`$${producto.precio}`} producto={productos.length === 1} >
                            <Button btn={"Ver más"} onClick={() => onClick(producto)} />
                        </Item>
                    </div>
                ))
            }
        </>
    )
}

export default ItemList