import React from 'react';
import { Link } from 'react-router-dom';

const CardProducts = ({products}) => {

    const { Image, name, price, available, url } = products;

    let avalible;
    if(available){
        avalible = 'En Stock';
    }else{
        avalible = 'Sin Stock';
    }
    
    return (     
        <>
            <Link  to={`/product/${url.slice(-1)}`} className=' link-underline link-underline-opacity-0'>
                <div className='card'>
                    <img src={Image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title ">{name}</h5>
                        <p className="card-text">Precio: {price}</p>
                        <p className="card-text">{avalible}</p>
                    </div>
                </div>        
            </Link>
        
        </>   
    )
}

export default CardProducts;