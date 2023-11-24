import React from 'react';
import { card, bgOscuroMedio, createButton, inputStyles } from '../../../pages/Products/Products.module.css';

const Input = ({ setSearchProduct, margin, placeholder, inputStyle, name, type, error, setError }) => {
    return (
        <div className={margin}>
            <div className={`input-group ${inputStyle}`}>
                <input type={type} className={inputStyles} placeholder={placeholder} aria-label="Recipient's username" aria-describedby="button-addon2" name={name} onChange={(event) => { setSearchProduct(event) }} required />
            </div>
        </div>
    )
}

export default Input;