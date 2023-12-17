import React from 'react';
import {  img, createButton } from '../cardPleaseholder/CardPleaceholder.module.css';

const CardFieldPleaceholder = () => {

    const urlImg = "https://www.rivera.gub.uy/portal/wp-content/uploads/2017/02/imagen-no-disponible-820x513.jpg"

    return (
        <div>
            <div className={`card mb-3 ${createButton}`}>
                <img src={urlImg} className={`card-img-top ${img}`} alt="..." />
                <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardFieldPleaceholder