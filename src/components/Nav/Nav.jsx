import { Link } from "react-router-dom"
import styles from  "./Nav.module.css"

const navigation = [
  { component: "/", name: "Home" },
  { component: "/contact", name: "Contato" },
  { component: "/sobre", name: "Sobre" }
]

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <Link to={"/"}><p>Início</p></Link>
      <Link to={"/contato"}><p>Buscar</p></Link>
      </div>
  )
}

export default Nav