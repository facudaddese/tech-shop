import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [input, setInput] = useState(initialState);

    const handleInput = ({ target }) => {
        const { name, value } = target;
        setInput({
            ...input,
            [name]: value
        })
    }

    return { ...input, handleInput }
}
