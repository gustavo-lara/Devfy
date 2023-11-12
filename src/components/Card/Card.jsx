import React from 'react'
import styles from "./Card.module.css"

const Card = ({img, p, h4}) => {
  return (
    <div className={styles.card}>
        <img src={img} alt="" />
        <div className={styles.play}><ion-icon name="play"></ion-icon></div>
        <div className={styles.cont}>
        <p>{p}</p>
        <h4>{h4}</h4>
        </div>
    </div>
  )
}

export default Card