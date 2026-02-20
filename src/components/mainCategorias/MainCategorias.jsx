const MainCategorias = ({ containerClass, img, alt, imgClass, titulo }) => {
    return (
        <div className={containerClass}>
            <img src={img} alt={alt} className={imgClass} />
            <div className='nombre-container'>
                <p className='title-categoria'>{titulo}</p>
            </div>
        </div>
    )
}

export default MainCategorias
