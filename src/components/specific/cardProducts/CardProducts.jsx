import React from 'react';
import { Link } from 'react-router-dom';
import style from './CardProducts.module.css';

const CardProducts = ({products, onItemClick}) => {

    const { Image, name, price, available, _id} = products;
    const { img, div, card} = style;

    let avalible;
    if(available){
        avalible = 'En Stock';
    }else{
        avalible = 'Sin Stock';
    }
    
    return (     
        <>
            <Link  to={`/product/${_id}`} onClick={() => onItemClick(products)} className=' link-underline link-underline-opacity-0 '>
                    <div className={`card `}>
                        <img src={Image} className={`card-img-top  ${img}`} alt="..." />
                        <div className="card-body">
                            <div className={`${div}`}>
                                <h5 className={`card-title ${card}`}>{name}</h5>
                            </div>
                            <p className="card-text">Precio: {price}</p>
                            <p className="card-text">{avalible}</p>
                        </div>
                    </div>        
            </Link>
        
        </>   
    )
}

export default CardProducts;