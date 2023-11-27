import React from 'react';
import {  img, createButton } from '../cardPleaseholder/CardPleaceholder.module.css';

const CardFieldPleaceholder = () => {

    const urlImg = "https://www.rivera.gub.uy/portal/wp-content/uploads/2017/02/imagen-no-disponible-820x513.jpg"

    return (
        <div>
            <div class={`card mb-3 ${createButton}`}>
                <img src={urlImg} class={`card-img-top ${img}`} alt="..." />
                <div class="card-body">
                    <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                    </h5>
                    <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardFieldPleaceholder