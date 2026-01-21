import { useState, useEffect } from "react"
import { getProductos } from "../services/getProductos"

export const useFetch = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos()
            .then(data => setProductos(data));
    }, []);

    return { productos }
}
