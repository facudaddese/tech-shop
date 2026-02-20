import { useForm } from '../../hooks/useForm'
import './Contacto.css'

const Contacto = () => {

    const initialState = { nombre: '', apellido: '', email: '', txtArea: '' }
    const { nombre, apellido, email, txtArea, handleInput } = useForm(initialState);

    return (
        <div className="form-container">
            <h2 className='title-form'>¿Necesitás ayuda?</h2>
            <form onSubmit={(e) => e.preventDefault()} className='form'>
                <input type="text" name='nombre' placeholder='Ingrese su nombre...' value={nombre} onChange={handleInput} />
                <input type="text" name='apellido' placeholder='Ingrese su apellido...' value={apellido} onChange={handleInput} />
                <input type="email" name='email' placeholder='Ingrese su correo electronico...' value={email} onChange={handleInput} />
                <textarea className='textarea-mensaje' name='txtArea' placeholder='Deje su mensaje aquí...' value={txtArea} onChange={handleInput}></textarea>
                <button type="submit" className='btn-form'>Enviar</button>
            </form>
        </div>
    )
}

export default Contacto