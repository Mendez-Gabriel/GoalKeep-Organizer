import React from 'react';
import { Link } from 'react-router-dom';
import style from './ImageLink.module.css'


const ImageLink = ({ img, Title, _id }) => {

    const { imgProduct, btnProduct, padding } = style;

    return (

        <div className=' d-flex flex-column mx-2 '>
            <Link to={`/productos/${_id}`}>
                <button className={`btn btn-light rounded-4  ${btnProduct}`}>
                    <div className='flex-column '>  
                        <img src={img} alt="" className={`${imgProduct}`} />                     
                        <h5 className={`${padding}`}>{Title}</h5>
                    </div>
                </button>
            </Link>
        </div>

    )
}

export default ImageLink;