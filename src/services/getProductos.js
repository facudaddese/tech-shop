export const getProductos = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })
}
