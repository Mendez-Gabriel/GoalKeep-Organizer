import React from 'react';
import { Link } from 'react-router-dom';
import style from './AboutUs.module.css';
import logoIcon from '../../../assets/Icon/Icon.svg';

const AboutUs = () => {
  const {aboutUsContainer, aboutUsContent, aboutUsImage, aboutUsText, aboutUsButton} = style
  const imageUrl = {logoIcon}; 

  return (
    <div className={`${aboutUsContainer} mt-5`}>
      <div className={aboutUsContent}>
      <img className={aboutUsImage} src={logoIcon} alt="Sobre nosotros" />
        <div className={aboutUsText}>
          <h1>Sobre Nosotros</h1>
          <h6>
          Bienvenido a GoalKeep Organizer, tu destino principal para experimentar el fútbol de una manera única y emocionante. Nos enorgullece ser líderes en el alquiler de canchas de fútbol, ofreciendo instalaciones de primera clase para que disfrutes de tu pasión por el deporte rey.
          </h6>
          <Link to="/Fundadores">
            <button className={aboutUsButton}>Fundadores  </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;