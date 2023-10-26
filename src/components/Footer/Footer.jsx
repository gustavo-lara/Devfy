import React from 'react'
import styles from  "./Footer.module.css"
import insta from "../../assets/logo-instagram.svg"
import tiktok from "../../assets/logo-tiktok.svg"
import github from "../../assets/logo-github.svg"


const Footer = () => {
  return (
    <div className={styles.div}>
     <a href="https://www.instagram.com/_gustavolara_/"><img src={insta} alt="" /></a>
     <a href="https://www.tiktok.com/@gustavolara_"><img src={tiktok} alt="" /></a>
     <a href="https://github.com/gustavo-lara"><img src={github} alt="" /></a>
    </div>
  )
}

export default Footer