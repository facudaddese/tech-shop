import './Contacto.css'
import { useForm } from '../../hooks/useForm'
import { useToastify } from '../../hooks/useToastify'

const Contacto = () => {

    const initialState = { nombre: '', apellido: '', email: '', txtArea: '' }
    const { nombre, apellido, email, txtArea, handleInput, reset } = useForm(initialState);
    const { success, error } = useToastify();

    const handleSubmit = (e) => {
        e.preventDefault();

        let campos = { nombre, apellido, email, txtArea };

        for (let campo in campos) {
            if (!campos[campo].trim()) {
                return error(`El campo ${campo} es obligatorio`);
            }
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(email)) {
            return error("El email no es válido");
        }

        setTimeout(() => {
            success("Mensaje enviado correctamente ✅");
            reset();
        }, 1000);
    }

    return (
        <div className="form-container">
            <h2 className='title-form'>¿Necesitás ayuda?</h2>
            <form onSubmit={handleSubmit} className='form'>
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