import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className={styles.div}>
      <div className={styles.bar}>
        <a href="">Inscrever-se</a> <button>Entrar</button>
      </div>
    </div>
  )
}

export default Home