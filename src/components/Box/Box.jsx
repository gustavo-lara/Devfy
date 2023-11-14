import React from 'react'
import styles from "./Box.module.css"

const Box = ({p}) => {
  return (
    <div className={styles.box}>
        <p>{p}</p>
    </div>
  )
}

export default Box