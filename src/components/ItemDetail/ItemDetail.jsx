import './ItemDetail.css'

const ItemDetail = ({ producto, children }) => {

    if (!producto) return null;

    return (
        <div className="item-detail" key={producto.id}>
            <img src={producto.img} alt={producto.nombre} />
            <div className="item-detail-info">
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <strong>${producto.precio}</strong>
            </div>
            {children}
        </div>
    )
}

export default ItemDetail
