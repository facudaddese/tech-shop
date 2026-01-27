import { useState } from "react"

const Button = () => {

    const [btn, setBtn] = useState();

    const handleBtn = () => {
        setBtn(btn);
    }

    return (
        <div className="btn-container">
            <button onClick={handleBtn}>Agregar al carrito</button>
        </div>
    )
}

export default Button