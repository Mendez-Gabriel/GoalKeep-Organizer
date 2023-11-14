import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logoIcon from '../../../assets/Icon/Icon.svg';

const AboutUs = () => {

  return (
    <div className="about-us-container">
      <div className="about-us-content">
      <img className="about-us-image" src={logoIcon} alt="Sobre nosotros" />
        <div className="about-us-text">
          <h1>Sobre Nosotros</h1>
          <h6>
          Bienvenido a GoalKeep Organizer, tu destino principal para experimentar el fútbol de una manera única y emocionante. Nos enorgullece ser líderes en el alquiler de canchas de fútbol, ofreciendo instalaciones de primera clase para que disfrutes de tu pasión por el deporte rey.
          </h6>
          <Link to="/Fundadores">
            <button className="about-us-button">Fundadores  </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;