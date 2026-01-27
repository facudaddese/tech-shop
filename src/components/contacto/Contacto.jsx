import './Contacto.css'

const Contacto = () => {
    return (
        <div className="form-container">
            <h2 className='title-form'>¿Necesitás ayuda?</h2>
            <form onClick={(e) => e.preventDefault()} className='form'>
                <input type="text" placeholder='Ingrese su nombre...' />
                <input type="text" placeholder='Ingrese su apellido...' />
                <input type="email" placeholder='Ingrese su correo electronico...' />
                <textarea className='textarea-mensaje' placeholder='Deje su mensaje aquí...'></textarea>
                <button type="submit" className='btn-form'>Enviar</button>
            </form>
        </div>
    )
}

export default Contacto