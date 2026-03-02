import { useState, useEffect } from "react";
import { useToastify } from "../hooks/useToastify";

export const useCarrito = () => {

    const [cantidad, setCantidad] = useState(1);
    const [carrito, setCarrito] =
        useState(() => localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []);
    const { success } = useToastify();

    const handleSumarCantidad = (stockDisponible) => { cantidad < stockDisponible && setCantidad(cantidad + 1); }

    const handleRestarCantidad = () => { cantidad > 1 && setCantidad(cantidad - 1) }

    const agregarAlCarrito = (item) => {
        //Hago una copia del carrito original
        const nuevoCarrito = [...carrito];

        //Busco el producto en el carrito
        const estaEnCarrito = nuevoCarrito.find((producto) => producto.id === item.id);

        //Si está, devuelvo un nuevo objeto con los datos y la cantidad actualizada.
        if (estaEnCarrito) {
            setCarrito(nuevoCarrito.map((producto) => producto.id === item.id ? { ...producto, cantidad: producto.cantidad + cantidad } : producto));
        } else { //Si no coincide, devuelve el producto sin cambios
            nuevoCarrito.push({ ...item, cantidad });
            setCarrito(nuevoCarrito);
        }

        success("Producto agregado al carrito");
        setCantidad(1);
    }

    //Cada vez que se agrega un item al carrito, se guarda en el localStorage 
    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    return { carrito, handleSumarCantidad, handleRestarCantidad, agregarAlCarrito, cantidad }
}