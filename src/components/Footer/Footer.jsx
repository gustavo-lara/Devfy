import React from 'react'
import styles from  "./Footer.module.css"
import insta from "../../assets/logo-instagram.svg"
import tiktok from "../../assets/logo-tiktok.svg"
import twitter from "../../assets/logo-twitter.svg"
import github from "../../assets/logo-github.svg"


const Footer = () => {
  return (
    <div className={styles.div}>
     <a href="#"><img src={insta} alt="" /></a>
     <a href="#"><img src={tiktok} alt="" /></a>
     <a href="#"><img src={twitter} alt="" /></a>
     <a href="#"><img src={github} alt="" /></a>
    </div>
  )
}

export default Footer