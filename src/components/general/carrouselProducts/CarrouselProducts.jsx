import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardProducts from '../../specific/cardProducts/CardProducts';
import configCarrousel from './configCarrouselProducts';
import { bgOscuroMedio } from './CarrouselProducts.module.css';
import { Container } from 'react-bootstrap';
import ContainerCardPleaceholder from '../containerCardPleaceholder/ContainerCardPleaceholder';
import CardPleaseholder from '../cardPleaseholder/CardPleaseholder';

const Carrousel = ({ setItem, urlProducts, titleCarrousel, titleColor, bgCarousel }) => {

  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  let numeroAleatorio = Math.floor(Math.random() * 4) + 1;

console.log(numeroAleatorio);

  useEffect(() => {
    const { data } = axios.get(`${urlProducts}?page=${numeroAleatorio}`)
      .then(({ data }) => { 
        setProducts(data.info.docs);
        setLoader(false);
       })
      .catch((err) => { console.log(err) })
  }, []);

  const updateSelectedItem = (selectedItem) => {
    setItem(selectedItem);
  };  
   console.log(products)
  return (
    <div className={`py-5 ${bgCarousel}`}>
      <h1 className={titleColor}>{titleCarrousel}</h1>
      <div className='pt-3 '>
        <Carousel responsive={configCarrousel} infinite={true} containerClass=''>
          { loader ? 
            (
              [1, 2, 3, 4, 5].map((index) => (
                <div key={index}>
                  <CardPleaseholder />
                </div>
              ))
              
            )
          :
            (
              products.map((product) => (
                <CardProducts products={product}  key={product._id} updateSelectedItem={updateSelectedItem}/>
              ))
            )
          }
        </Carousel>
      </div>
    </div>

  )
}

export default Carrousel;