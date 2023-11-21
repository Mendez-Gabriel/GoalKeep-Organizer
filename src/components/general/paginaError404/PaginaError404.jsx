import React from 'react'
import style from './PaginaError404.module.css'
import { Link } from 'react-router-dom';

function PaginaError404() {
  const {errorContainer, errorHeading , errorMessage, errorSection, redirectButton} = style

  return (
    <section className={errorSection}>
    <div className={errorContainer}>
      <h1 className={errorHeading}>¡Golazo! Error 404</h1>
      <p className={errorMessage}>¡Ups! Parece que el balón se escapó y no podemos encontrar la página que estás buscando.</p>
      <Link to="/" className={redirectButton}>Volver al Home</Link>
    </div>
    </section>
  )
}

export default PaginaError404