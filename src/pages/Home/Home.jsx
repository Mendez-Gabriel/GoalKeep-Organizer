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

    useEffect(() => { 
      const { data } = axios.get(`${urlProducts}?id=${params.id}`)
        .then(({ data }) => { item(data.results[0]) })
        .catch((err) => {console.log(err)})   
    }, []);

  return (
    <div className={`mt-5 pt-5 ${bgLightGreen}`}>
        {/* <div className='d-flex justify-content-center'>
          <img src={iconLogo} className={logoIconStyle}/>
          <h1 className=''><strong className={`fst-italic ms-3 ${textSize}`}>GoalKeep Organizer</strong></h1>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-sm-6">
              <h1 className={textSize}>RESERVA</h1>
              <h1><strong className={textSize}>TU CANCHA</strong></h1>
            </div>
            <div className="col-12 col-sm-6 d-flex  align-items-center">
              <Link to={'/canchas'} className='btn btn-success d-flex justify-content-center  m-4 col '><h5>RESERVA HOY</h5></Link>
            </div>
          </div>
        </div> */}
        <div className='container-fluid row mx-0 my-0 px-0'>
        <div className='col-12 col-md-6 px-md-5'>
          <h4 className='fst-italic text-center' style={{color:'#345e37'}}>Sale fulbo?</h4>
          <div className='d-flex justify-content-center my-5'>
            <img src={iconLogo} className={logoIconStyle} />
            <h2 className=''><strong className={`ms-3 ${textSize}`}>GoalKeep Organizer</strong></h2>
          </div>
          <h5 className='mb-5'>En Goalkeep te ofrecemos las mejores canchas con una amplia variedad de césped y tamaño. Contamos con servicio WiFi gratis y cada cancha tiene su propio asador para que vos y tus amigos disfruten de un excelente tercer tiempo. Además, hay a tu disposición vestidores y duchas...</h5>
          <h3>Precios:</h3>
          <h5><strong>Fútbol 5:</strong> 6000/hr</h5>
          <h5><strong>Fútbol 7:</strong> $8000/hr</h5>
          <h5><strong>Fútbol 11:</strong> $10000/hr</h5>
        </div>
        <div className='col-12 col-md-6  row d-flex justify-content-center my-5'>
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