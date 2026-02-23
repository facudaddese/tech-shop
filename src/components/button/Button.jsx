const Button = ({ btn, onClick }) => {
    return (
        <div className="btn-container">
            <button onClick={onClick}>{btn}</button>
        </div>
    )
}

export default Button