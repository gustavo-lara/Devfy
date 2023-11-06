import React from 'react'
import styles from "./Biblioteca.module.css"

const Biblioteca = () => {
  return (
    <div className={styles.biblioteca}>
       <div className={styles.links}>
        <div><ion-icon name="library-outline"></ion-icon><p>Sua Biblioteca</p></div>
      </div>
      <div className={styles.bloco}>
        <h3>Crie sua primeira playlist</h3>
        <p>É facil, vamos te ajudar</p>
        <button>Criar playlist</button>
      </div>
      <div className={styles.bloco}>
      <h3>Que tal seguir um podcast novo?</h3>
        <p>Avisaremos você sobre novos episódios</p>
        <button>Explore podcasts</button>
      </div>

      <a className={styles.cookies}  target="_blank" href="https://th.bing.com/th/id/OIP.SVA_zCQxzh_SXmgkuMXFVQHaHR?pid=ImgDet&rs=1">Cookies</a>
      <button className={styles.btn}> <ion-icon name="globe-outline"></ion-icon> Português do Brasil</button>
    </div>
  )
}

export default Biblioteca