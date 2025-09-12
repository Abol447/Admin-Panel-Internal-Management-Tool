import React from 'react'

function TextField({label , placeholder , type}) {
    return (
        <div >
            <label htmlFor={label} className="block my-2 text-sm"> {label} </label>
            <input
                id={label}
                placeholder={placeholder}
                type={type}
                className="input--style"
            />
        </div>
    )
}

export default TextField;