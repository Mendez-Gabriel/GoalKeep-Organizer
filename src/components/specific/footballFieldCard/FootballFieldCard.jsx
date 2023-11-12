import React from 'react'
import styles from './FootballFieldCard.module.css'

function FootballFieldCard({  name, grassType, players, imgUrl }) {
  return (
    <div className ={`col-10 p-0 ${styles.cardContainer}`}>
      <img src={ imgUrl } alt="img-estadio" />
      <div className={styles.info}>
        <h3>{ name }</h3>
        <p>Jugadores: { players }</p>
        <p>cesped: { grassType }</p>
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.button}><a href="#"> Ver Disponibilidad </a></div>
    </div>
  )
}

export default FootballFieldCard