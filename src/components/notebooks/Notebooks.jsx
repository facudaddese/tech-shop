import { useFetch } from '../../hooks/useFetch'
import ItemsProductos from '../ItemsProductos/ItemsProductos';

const Notebooks = () => {

    const { productos } = useFetch();

    return (
        <>
            <div className="productos-container">
                {
                    productos
                        .filter(el => el.categoria === "notebook") //filtramos los producto solo que sean notebooks
                        .sort((a, b) => a.precio - b.precio) //ordenamos las notebooks por precio, de menor a mayor
                        .map((notebook) => (
                            <ItemsProductos key={notebook.id} containerClass={'flex-container'} divClass={'description-container'} img={notebook.img} alt={notebook.nombre} containerTitleClass={'flex-item'} titleClass={'title-flex-item'} title={notebook.nombre} precio={`$${notebook.precio}`} />
                        ))
                }
            </div>
        </>
    )
}

export default Notebooks