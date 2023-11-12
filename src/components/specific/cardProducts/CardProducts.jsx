import React from 'react';
import { Link } from 'react-router-dom';
import style from './CardProducts.module.css';

const CardProducts = ({products, updateSelectedItem}) => {

    const { Image, name, price, available, _id} = products;
    const { img, div, card, title, bgOscuroBajo, bgClaroMedio,textColorCream, boxShadow} = style;

    let avalible;
    if(available){
        avalible = 'En Stock';
    }else{
        avalible = 'Sin Stock';
    }
    
    return (     
        <div className="d-flex justify-content-center">
            <Link  to={`/product/${_id}`} onClick={() => updateSelectedItem(products)} 
            className=' link-underline link-underline-opacity-0 '>
                    <div className={`card ${card} ${boxShadow}`}>
                        <img src={Image} className={`card-img-top  ${img}`} alt="..." />
                        <div className={`card-body ${bgOscuroBajo}`}>
                            <div className={`${div}`}>
                                <h5 className={`${title} ${textColorCream}`}>{name}</h5>
                            </div>
                            <h5 className="text-warning">${price}</h5>
                            <p className={`fw-bold ${available === true ? ('text-success') : ('text-danger')} w-50`}>{avalible}</p>
                        </div>
                    </div>        
            </Link>
        
        </div>   
    )
}

export default CardProducts;