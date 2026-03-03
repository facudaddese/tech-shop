import { useState, useEffect } from "react"

export const useModal = (setCantidad) => {

    const [modal, setModal] = useState(false);
    const [itemSeleccionado, setItemSeleccionado] = useState(null);

    const handleModal = () => {
        setModal(prev => !prev);
        setCantidad(1);
    }

    const handleItem = (item) => {
        setItemSeleccionado(item);
    }

    const handleBtns = (item) => {
        handleItem(item);
        handleModal();
    }

    useEffect(() => {
        document.body.style.overflow = modal ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [modal]);

    return { modal, handleBtns, itemSeleccionado }
}
