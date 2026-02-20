import { useState, useEffect } from "react"

export const usePromise = (promise) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        promise()
            .then(data => setProductos(data));
    }, [promise]);

    return { productos }
}
