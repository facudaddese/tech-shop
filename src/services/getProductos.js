import data from '../data/productos.json'

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 500);
    })
}
