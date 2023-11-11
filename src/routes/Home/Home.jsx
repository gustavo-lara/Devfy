import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className={styles.div}>
      <div className={styles.bar}>
        <a href="">Inscrever-se</a> <button>Entrar</button>
      </div>
      <div className={styles.cont}>
        <p>Playlists do Spotify</p>
      </div>
    </div>
  )
}

export default Home