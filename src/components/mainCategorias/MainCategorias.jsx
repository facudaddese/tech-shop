const MainCategorias = ({ containerClass, img, alt, imgClass, divClass, titleClass, titulo }) => {
    return (
        <div className={containerClass}>
            <img src={img} alt={alt} className={imgClass} />
            <div className={divClass}>
                <p className={titleClass}>{titulo}</p>
            </div>
        </div>
    )
}

export default MainCategorias
