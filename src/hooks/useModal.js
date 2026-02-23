import { useState } from "react"

export const useModal = () => {

    const [modal, setModal] = useState(false);
    const [itemSeleccionado, setItemSeleccionado] = useState({});

    const handleModal = () => {
        setModal(!modal);
    }

    const handleItem = (item) => {
        setItemSeleccionado(item);
    }

    return { modal, handleModal, handleItem, itemSeleccionado }
}
