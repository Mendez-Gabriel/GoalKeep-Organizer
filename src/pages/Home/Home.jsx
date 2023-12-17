import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { logoIconStyle, bgLightCream, bgLightGreen, textSize, footballFieldsButton } from './Home.module.css';
import iconLogo from '../../assets/Icon/Icon.svg';
import scaloneta from '../../assets/fotos/Scalonetta.png'
import CarrouselProducts from '../../components/general/carrouselProducts/CarrouselProducts';
import  CarruselSlide  from '../../components/general/carrucelSlide/CarruselSlide';


const Home = () => {
  const params = useParams();

    const url = import.meta.env.VITE_APP_URL_BASE
    const urlProducts = `${url}/products`;

    const item = [];

  

  return (
    <div className={`mt-5 pt-5 ${bgLightGreen}`}>
        <div className='container-fluid row mx-0 my-0 px-0'>
        <div className='col-12 col-md-6 px-md-5'>
          <h4 className='fst-italic text-center' style={{color:'#345e37'}}>¿Sale fulbo?</h4>
          <div className='d-flex justify-content-center my-5'>
            <img src={iconLogo} className={logoIconStyle} />
            <h2 className=''><strong className={`fst-italic ms-3 ${textSize}`}>GoalKeep Organizer</strong></h2>
          </div>
          <h4 className='fst-italic mb-5'>En Goalkeep te ofrecemos las mejores canchas con una amplia variedad de césped y tamaño. Contamos con servicio WiFi gratis y cada cancha tiene su propio asador para que vos y tus amigos disfruten de un excelente tercer tiempo. Además, hay a tu disposición vestidores y duchas...</h4>
          <h3 className='text-end'>Precios:</h3>
          <h6 className='text-end'><strong>Fútbol 5:</strong> 6000/hr</h6>
          <h6 className='text-end'><strong>Fútbol 7:</strong> $8000/hr</h6>
          <h6 className='text-end'><strong>Fútbol 11:</strong> $10000/hr</h6>
          <p className='text-end'>*Los turnos tienen un mínimo una hora de duración y podés pedir todos los que necesites, dependiendo de su disponibilidad, desde 09 a 22hr</p>
        </div>
        <div className='col-12 col-md-6  row d-flex justify-content-center my-5 mx-0 px-0'>
          <img src={scaloneta} alt="scaloneta" className='object-fit-contain img-fluid' />
          <Link className={`col-8 col-md-6 text-decoration-none ${footballFieldsButton} text-center`} to={'/canchas'}>Subite, vamos a conocer nuestras canchas</Link>
        </div>
        </div>
      
        <div className='containter mt-5'>
          <CarrouselProducts setItem={item} urlProducts={urlProducts} titleCarrousel={'... o explora nuestra tienda'} bgCarousel={bgLightCream} titleColor={'ms-5 fst-italic'}/>
        </div>
        <div className='bg-light my-5'>
          <CarruselSlide />
        </div>
    </div>
  )
}

export default Home;