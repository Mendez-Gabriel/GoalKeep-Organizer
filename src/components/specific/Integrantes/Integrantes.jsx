import React from 'react';
import styles from './integrantes.module.css'; 

const CardsIntegrantes = () => {
  const integrantesData = [
    {
      id: 1,
      name: 'Duhart Neme Alejo',
      age: 20,
      profession: 'Programador Full Stack Junior',
      description: 'Estudiante de Rolling Code School y Estudiante para Programador de videojuegos.',
      image: 'https://res.cloudinary.com/dptlgyfq5/image/upload/c_crop,g_auto,h_800,w_800/fundadores/ytmfqebe5lmw4fn8xwp7.jpg',
      linkedin: 'https://www.linkedin.com/in/alejo-duhart-neme-97aa872a2/',
      github: 'https://github.com/Alejo-Duhart',
    },
    {
      id: 2,
      name: 'Matias Roger Narcotti',
      age: 28,
      profession: 'Desarrollador Full Stack Junior',
      description: 'Apasionado por el inglés, la Programación y en aprender cosas nuevas.',
      image: 'https://res.cloudinary.com/dptlgyfq5/image/upload/c_crop,g_auto,h_800,w_800/fundadores/s4ecuplh0neelbwgu2eu.jpg',
      linkedin: 'https://www.linkedin.com/in/matias-roger-narcotti-dev/',
      github: 'https://github.com/MatiRoger',
    },
    {
      id: 3,
      name: 'Mendez Gabriel  Dario',
      age: 28,
      profession: 'Desarrollador Full Stack Junior',
      description: 'Apasionado programador dedicado a crear soluciones innovadoras y eficientes.',
      image: 'https://res.cloudinary.com/dptlgyfq5/image/upload/c_crop,g_auto,h_800,w_800/fundadores/pjrjnhzlclwxbw8mtxbb.jpg',
      linkedin: 'https://www.linkedin.com/in/gabriel-mendez-976370236',
      github: 'https://github.com/Mendez-Gabriel',
    },
  ];

  return (
    <div className={styles.cardsIntegrantesContainer}>
      {integrantesData.map((integrante) => (
        <div key={integrante.id} className={styles.cardIntegrante}>
          <img src={integrante.image} alt={`Persona ${integrante.id}`} />
          <h2>{integrante.name}</h2>
          <p>Edad: {integrante.age}</p>
          <p>Profesión: {integrante.profession}</p>
          <p>{integrante.description}</p>
          <p>LinkedIn: <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer">{integrante.name}/LinkedIn</a></p>
          <p>GitHub: <a href={integrante.github} target="_blank" rel="noopener noreferrer">{integrante.name}/Github</a></p>
        </div>
      ))}
    </div>
  );
};

export default CardsIntegrantes;