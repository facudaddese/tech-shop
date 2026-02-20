const Item = ({ img, alt, title, precio, children, producto }) => {
    return (
        <div className='flex-container'>
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