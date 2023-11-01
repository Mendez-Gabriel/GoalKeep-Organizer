import React from 'react'
import styles from './FootballFieldCard.module.css'

function FootballFieldCard() {
  return (
    <section className='container-fluid row p-5 mt-5 mx-0 justify-content-center w-100'>
    <div className ={`col-10 col-md-5 col-lg-4 ${styles.cardContainer}`}>
      <img src="https://www.cariverplate.com.ar/imagenes/contenidos/2022-07/22070-1.jpg" alt="" />
      <div className={styles.info}>
        <h3>monumental</h3>
        <p>Jugadores: 11</p>
        <p>cesped: Mixto europeo</p>
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.button}><a href="#"> Ver Disponibilidad </a></div>
    </div>
    </section>
  )
}

export default FootballFieldCard