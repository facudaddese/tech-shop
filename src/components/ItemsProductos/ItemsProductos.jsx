import Button from "../button/Button"

const ItemsProductos = ({ containerClass, divClass, img, alt, containerTitleClass, titleClass, title, precio }) => {
    return (
        <div className={containerClass}>
            <div className={divClass}>
                <img src={img} alt={alt} />
                <div className={containerTitleClass}>
                    <h3 className={titleClass}>{title}</h3>
                    <strong>{precio}</strong>
                </div>
            </div>
            <Button />
        </div>
    )
}

export default ItemsProductos