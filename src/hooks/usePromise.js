import { useState, useEffect } from "react"

export const usePromise = (promise) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        promise()
            .then(data => {
                setProductos(data)
                setLoading(false);
            });
    }, [promise]);

    return { productos, loading }
}
