import { useState } from "react"

export const useInput = () => {

    const [busqueda, setBusqueda] = useState('');

    const handleBusqueda = ({ target }) => { setBusqueda(target.value); }

    return { busqueda, handleBusqueda, setBusqueda }
}

