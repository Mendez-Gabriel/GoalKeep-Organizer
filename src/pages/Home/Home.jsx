import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { logoIconStyle, bgLightCream, bgLightGreen } from './Home.module.css';
import iconLogo from '../../assets/Icon/Icon.svg';
import CarrouselProducts from '../../components/general/carrouselProducts/CarrouselProducts';


const Home = () => {
  const params = useParams();

    const url = import.meta.env.VITE_APP_URL_BASE_PRODUCTS
    const urlProducts = `${url}products`;

    const item = [];

    useEffect(() => { 
      const { data } = axios.get(`${urlProducts}?id=${params.id}`)
        .then(({ data }) => { item(data.results[0]) })
        .catch((err) => {console.log(err)})   
    }, []);

  return (
    <div className={`mt-5 pt-5 ${bgLightGreen}`}>
      <div className='d-flex justify-content-center'>
        <img src={iconLogo} className={logoIconStyle}/>
        <h1 className='fst-italic ms-3'><strong>GoalKeep Organizer</strong></h1>
      </div>
      <div className='containter mt-5'>
        <CarrouselProducts setItem={item} urlProducts={urlProducts} titleCarrousel={'Productos'} bgCarousel={bgLightCream} titleColor={'ms-5 fst-italic'}/>
      </div>
    </div>
  )
}

export default Home;