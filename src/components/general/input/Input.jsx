import React from 'react'

const Input = ({ setSearchProduct, margin, placeholder, inputStyle, name, type }) => {
    return (
        <div className={margin}>
            <div className={`input-group ${inputStyle}`}>
                <input type={type} className="form-control" placeholder={placeholder} aria-label="Recipient's username" aria-describedby="button-addon2" name={name} onChange={(event) => {setSearchProduct(event)}} />
            </div>
        </div>
    )
}

export default Input;