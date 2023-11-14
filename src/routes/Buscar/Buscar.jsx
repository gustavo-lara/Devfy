import React from 'react'
import styles from "./Buscar.module.css"
import Box from '../../components/Box/Box'

const Buscar = () => {
  return (
    <div className={styles.div}>
      <div className={styles.bar}>
        <input placeholder='O que você quer ouvir?' type="text" />
        <a href="">Inscrever-se</a> <button>Entrar</button>
      </div>
      <div className={styles.cont}>
        <p className={styles.tit}>Navegar por todas as seções</p>
        <div className={styles.cards}>
          <div className={styles.caixas}>
            <Box p="Conteúdo" />
            <Box p="Conteúdo" />
            <Box p="Conteúdo" />
            <Box p="Conteúdo" />
            <Box p="Conteúdo" />
          </div>
          <div className={styles.caixas}>
          <Box p="Conteúdo" />
            <Box p="Conteúdo" />
            <Box p="Conteúdo" />
            <Box p="Conteúdo" />
            <Box p="Conteúdo" />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Buscar