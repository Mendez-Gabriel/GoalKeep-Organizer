import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from './FormContacto.module.css'

const FormContacto = () => {
  const { formContainer, formLabel, formInput, formSubmit, formTextarea } = style;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      alert('El nombre solo debe contener letras y espacios.');
      return;
    }
    
    if (name.trim().length < 2 || name.trim().length > 50) {
      alert('El nombre debe tener entre 2 y 50 caracteres.');
      return;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Por favor, ingresa una dirección de correo electrónico válida.');
      return;
    }

    if (message.length < 20) {
      alert('El mensaje no puede tener menos de 20 caracteres.');
      return;
    }

    emailjs.sendForm('service_bytecoderolling', 'template_t67ahad', form.current, '9LC3zCvDcC9CTWgeS')
      .then((result) => {
        alert('¡El correo electrónico se envió con éxito!');
        console.log(result.text);
      }, (error) => {
        alert('Hubo un error al enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde.');
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={formContainer}>
      <label className={formLabel}>Nombre</label>
      <input type="text" name="user_name" className={formInput} />
      
      <label className={formLabel}>Email</label>
      <input type="email" name="user_email" className={formInput} />
      
      <label className={formLabel}>Comentario</label>
      <textarea
        name="message"
        className={formTextarea}
        maxLength="500"
      />
      
      <input type="submit" value="Send" className={formSubmit} />
    </form>
  );
};

export default FormContacto;