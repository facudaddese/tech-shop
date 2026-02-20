import Button from '../button/Button'
import Item from '../item/Item'

const ItemList = ({ productos }) => {
    return (
        <>
            {
                productos.map(({ id, img, nombre, precio }) => (
                    <div data-aos="flip-right" key={id}>
                        <Item img={img} alt={nombre} title={nombre} precio={`$${precio}`} producto={productos.length === 1} >
                            <Button description={"Ver más"} />
                        </Item>
                    </div>
                ))
            }
        </>
    )
}

export default ItemList