import React from 'react';
import { Link } from 'react-router-dom';
import style from './PaginaContacto.module.css'

const ContactPage = () => {
  const {contactoDiv, contactContainer, contactHeading, contactIntro, contactInfo, infoItem, infoHeading, infoSection,
    FormButton} = style

  return (
    <div className={contactoDiv}>
      <div className={contactContainer}>
      <h1 className={contactHeading}>Contacto</h1>
      <p className={contactIntro}>¡Estamos encantados de escucharte! Puedes contactarnos utilizando la información de contacto a continuación:</p>
      <Link to="/FormContacto">
            <button className={FormButton}>Accede a un Formulario</button>
      </Link> 
      <div className={contactInfo}>
        <h2 className={infoHeading}>Información de contacto</h2>
        <p className={infoItem}>Correo electrónico: bytecoderolling@gmail.com</p>
        <p className={infoItem}>Teléfono: +123 456 789</p>
        <p className={infoItem}>Dirección: Pcia de Mendoza 1050, San Miguel de Tucumán, Tucumán</p>
      </div>
      </div>
    </div>
  );
};

export default ContactPage;