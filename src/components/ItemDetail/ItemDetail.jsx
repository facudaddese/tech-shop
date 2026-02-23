import './ItemDetail.css'

const ItemDetail = ({ itemSeleccionado, children, onClick }) => {

    if (!itemSeleccionado) return null;

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
                    <div id='btn-agregar'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
