import { useFetch } from '../../hooks/useFetch'

const Notebooks = () => {

    const { productos } = useFetch();

    return (
        <>
            <div className="productos-container">
                {
                    productos
                        .filter(el => el.categoria === "notebook")
                        .sort((a, b) => a.precio - b.precio)
                        .map((notebook) => (
                            <div key={notebook.id} className='flex-container'>
                                <div className="description-container">
                                    <img className='img-producto' src={notebook.img} alt={notebook.nombre} />
                                    <div className="flex-item">
                                        <h2>{notebook.nombre}</h2>
                                        <strong>${notebook.precio}</strong>
                                    </div>
                                </div>
                                <div className="btn-container">
                                    <button>Agregar al carrito</button>
                                </div>
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default Notebooks