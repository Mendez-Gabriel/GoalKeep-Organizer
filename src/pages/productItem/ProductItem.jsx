import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProductsItem from '../../components/specific/cardProductsItem/CardProductsItem';
import Carrousel from '../../components/general/carrouselProducts/CarrouselProducts';
import { bgOscuroMedio } from './ProductItem.module.css';

const ProductItem = () => {
    const params = useParams();

    const url = import.meta.env.VITE_APP_URL_BASE_PRODUCTS
    const urlProducts = `${url}products`;
    
    const [item, setItem] = useState([]);

    useEffect(() => { 
      const { data } = axios.get(`${urlProducts}?id=${params.id}`)
        .then(({ data }) => { setItem(data.results[0]) })
        .catch((err) => {console.log(err)})   
    }, [])
 
  return (
    <>
      <div className={`mt-5 pt-5 ${bgOscuroMedio}`}>
        <CardProductsItem products={item}/>
      </div>
      <div className='containter'>
        <Carrousel setItem={setItem} urlProducts={urlProducts} titleCarrousel={'Otros Productos'} titleColor={'ms-5 text-light'} bgCarousel={bgOscuroMedio}/>
      </div>
    </>
  )
}

export default ProductItem;