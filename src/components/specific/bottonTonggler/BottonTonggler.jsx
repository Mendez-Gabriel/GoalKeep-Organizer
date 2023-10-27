import React from 'react';
import { useState } from 'react';
import style from './BottonTonggler.module.css';

const BottonTonggler = () => {

    const [click, setClick] = useState(false)

    const { navicon, open } = style;

    const handlerClick = () => {
        setClick(!click)

    }


    return (
        <>
            <div className={`d-lg-none ${navicon} ${click ? open : ''}`} onClick={handlerClick} data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span></span>
                <span></span>
                <span></span>

            </div>
        </>
    )
}

export default BottonTonggler;