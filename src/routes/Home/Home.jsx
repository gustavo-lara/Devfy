import Card from "../../components/Card/Card"
import styles from "./Home.module.css"
import capa from "/src/assets/capaMusica.jpg"

export const Home = () => {
  return (
    <div className={styles.div}>
      <div className={styles.bar}>
        <a href="">Inscrever-se</a> <button>Entrar</button>
      </div>
      <div className={styles.cont}>
        <p className={styles.tit}>Playlists do Spotify</p>
        <div className={styles.cards}>
          <Card img={capa} p="Conteúdo" h4="Uma breve descrição do conteúdo" />
          <Card img={capa} p="Conteúdo" h4="Uma breve descrição do conteúdo" />
          <Card img={capa} p="Conteúdo" h4="Uma breve descrição do conteúdo" />
          <Card img={capa} p="Conteúdo" h4="Uma breve descrição do conteúdo" />
          <Card img={capa} p="Conteúdo" h4="Uma breve descrição do conteúdo" />
        </div>
      </div>
    </div>
  )
}

export default Home