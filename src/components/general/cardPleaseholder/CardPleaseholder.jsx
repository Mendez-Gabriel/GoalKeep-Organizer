import React from 'react';
import {  img, createButton } from './CardPleaceholder.module.css';

const CardPleaseholder = () => {

    const urlImg = "https://www.rivera.gub.uy/portal/wp-content/uploads/2017/02/imagen-no-disponible-820x513.jpg"

    return (
           
            <>
                <div className={`${createButton} m-4`} >
                    <div className="card-body">
                        <img src={urlImg} className={img} />
                        <h5 className={`card-title placeholder-glow mb-5 `}>
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow mb-5">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                        </p>
                    </div>
                </div>
            </>
                
                  
        
    )
}

export default CardPleaseholder;