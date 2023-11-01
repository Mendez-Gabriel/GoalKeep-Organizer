import React from 'react'

const Input = ({ setSearchProduct, placeholder, inputStyle }) => {
    return (
        <div>
            <div className={`input-group ${inputStyle}`}>
                <input type="text" className="form-control" placeholder={placeholder} aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => {setSearchProduct(e.target.value)}}/>
            </div>
        </div>
    )
}

export default Input;