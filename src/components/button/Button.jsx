const Button = ({ description, onClick }) => {
    return (
        <div className="btn-container">
            <button onClick={onClick}>{description}</button>
        </div>
    )
}

export default Button