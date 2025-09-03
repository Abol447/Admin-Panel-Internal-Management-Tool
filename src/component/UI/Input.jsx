

function Input({ type, placeholder, label }) {
    return (

        <div>
            <label for={label} className="block my-2 text-sm">{label}</label>
            <input
                id={label}
                placeholder={placeholder}
                type={type}
                className="input--style"
            />
        </div>

    )
}

export default Input