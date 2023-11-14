import React from 'react'
import styles from './FootballFieldCard.module.css'
import { Link } from 'react-router-dom'


function FootballFieldCard({  name, grassType, players, imgUrl, id }) {
  return (
    <div className ={`col-12 p-0 ${styles.cardContainer}`}>
      <img src={ imgUrl } alt="img-estadio" />
      <div className={styles.info}>
        <h3>{ name }</h3>
        <p>Jugadores: { players }</p>
        <p>cesped: { grassType }</p>
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.button}><Link to={`/canchas/${id}`}> Ver Disponibilidad </Link></div>
    </div>
  )
}

export default FootballFieldCard