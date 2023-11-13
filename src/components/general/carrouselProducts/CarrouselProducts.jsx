import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardProducts from '../../specific/cardProducts/CardProducts';
import configCarrousel from './configCarrouselProducts';
import { bgOscuroMedio } from './CarrouselProducts.module.css';

const Carrousel = ({ setItem, urlProducts, titleCarrousel, titleColor, bgCarousel }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const { data } = axios.get(urlProducts)
      .then(({ data }) => { setProducts(data.results) })
      .catch((err) => { console.log(err) })
  }, []);

  const updateSelectedItem = (selectedItem) => {
    setItem(selectedItem);
  };  

  return (
    <div className={`py-5 ${bgCarousel}`}>
      <h1 className={titleColor}>{titleCarrousel}</h1>
      <div className='pt-3 '>
        <Carousel responsive={configCarrousel} infinite={true} containerClass=''>
          {products.map((product) => (
            <CardProducts products={product}  key={product._id} updateSelectedItem={updateSelectedItem}/>
          ))}
        </Carousel>
      </div>
    </div>

  )
}

export default Carrousel;