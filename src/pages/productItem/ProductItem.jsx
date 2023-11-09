import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProductsItem from '../../components/specific/cardProductsItem/CardProductsItem';
import Carrousel from '../../components/general/carrousel/Carrousel';
import { bgOscuroMedio } from './ProductItem.module.css';

const ProductItem = () => {
    const params = useParams();

    const url = import.meta.env.VITE_APP_URL_BASE_PRODUCTS
    const urlBase = `${url}products`;
    

    const [item, setItem] = useState([]);
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
      const { data } = axios.get(`${urlBase}?id=${params.id}`)
        .then(({ data }) => { setItem(data.results[0]) })
        .catch((err) => {console.log(err)})   
    }, [])
 
    useEffect(() => {
      const { data } = axios.get(urlBase)
        .then(({ data }) => { setProducts(data.results) })
        .catch((err) => { console.log(err) })
    }, [])
    

    const updateSelectedItem = (selectedItem) => {
      setItem(selectedItem);
  };


  return (
    <>
      <div className={`mt-5 pt-5 ${bgOscuroMedio}`}>
        <CardProductsItem products={item}/>
      </div>
      <div className='containter'>
        <Carrousel infoCarrousel={products} updateSelectedItem={updateSelectedItem}/>
      </div>
    
    </>
  )
}

export default ProductItem;