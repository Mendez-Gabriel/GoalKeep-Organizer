import React from 'react';
import Input from '../input/Input';
import { inputStyles } from '../../../pages/Products/Products.module.css';


const InputReact = ({ type, handleChange, handleClick, text, name, placeholder, className, margin }) => {
    return (
        <>
            <div className={`d-flex flex-wrap ${margin}`}>
                <Input placeholder={placeholder} setSearchProduct={handleChange} type={type} name={name} />
                <button type='button' className={`${inputStyles} mx-1 mt-1 mt-sm-0`} onClick={(click) => {handleClick(click)}}>{text}</button>
            </div>
        </>
    )
}

export default InputReact;