import React from 'react';

const CardProducts = ({products}) => {

    const { Image, name, price, available } = products;

    let avalible;
    if(available){
        avalible = 'En Stock';
    }else{
        avalible = 'Sin Stock';
    }
    
    return (        
        <div className='card m-2'>
            <img src={Image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-truncate">{name}</h5>
                <p className="card-text">Precio: {price}</p>
                <p className="card-text">{avalible}</p>
                <a href="#" className="btn btn-primary">Agregar al Carrito</a>
            </div>
        </div>        
    )
}

export default CardProducts;