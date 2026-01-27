import Button from "../button/Button"

const ItemsMainProductos = ({ containerClass, divClass, img, alt, itemClass, titleClass, title, strong }) => {
    return (
        <div className={containerClass}>
            <div className={divClass}>
                <img src={img} alt={alt} />
                <div className={itemClass}>
                    <h3 className={titleClass}>{title}</h3>
                    <strong>{strong}</strong>
                </div>
            </div>
            <Button />
        </div>
    )
}

export default ItemsMainProductos