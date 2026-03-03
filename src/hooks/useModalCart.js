import { useState } from "react";
import { useToastify } from "./useToastify";

export const useModalCart = (carrito) => {

    const [modalCart, setModalCart] = useState(false);
    const { warning } = useToastify();

    const handleModalCart = () => {
        if (carrito.length === 0) {
            warning("No hay productos en el carrito");
            return;
        }
        setModalCart(prev => !prev);
    }

    return { modalCart, handleModalCart }
}
