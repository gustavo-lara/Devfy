import styles from "./Contato.module.css"

export const Contato = () => {
  return (
    <form className={styles.form}>
      <p>CONTATE-NOS </p>
      <input className={styles.email} placeholder="E-mail" type="text" />
      <input className={styles.senha} placeholder="Senha" type="text" />
      <input className={styles.texto} placeholder="Digite sua ideia!" type="text" />

      <button>ENVIAR</button>
    </form>
  )
}

export default Contato