import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { logoIconStyle, bgLightCream, bgLightGreen, textSize } from './Home.module.css';
import iconLogo from '../../assets/Icon/Icon.svg';
import CarrouselProducts from '../../components/general/carrouselProducts/CarrouselProducts';
import  CarruselSlide  from '../../components/general/carrucelSlide/CarruselSlide';


const Home = () => {
  const params = useParams();

    const url = import.meta.env.VITE_APP_URL_BASE
    const urlProducts = `${url}/products`;

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
          <h1 className=''><strong className={`fst-italic ms-3 ${textSize}`}>GoalKeep Organizer</strong></h1>
        </div>

        <div class="container my-5">
          <div class="row">
            <div class="col-12 col-sm-6">
              <h1 className={textSize}>RESERVA</h1>
              <h1><strong className={textSize}>TU CANCHA</strong></h1>
            </div>
            <div class="col-12 col-sm-6 d-flex  align-items-center">
              <Link to={'/canchas'} className='btn btn-success d-flex justify-content-center  m-4 col '><h5>RESERVA HOY</h5></Link>
            </div>
          </div>
        </div>
      
        <div className='containter mt-5'>
          <CarrouselProducts setItem={item} urlProducts={urlProducts} titleCarrousel={'PRODUCTOS'} bgCarousel={bgLightCream} titleColor={'ms-5 fst-italic'}/>
        </div>
        <div className='bg-light my-5'>
          <CarruselSlide />
        </div>
    </div>
  )
}

export default Home;