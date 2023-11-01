import { Link } from "react-router-dom"
import styles from "./Nav.module.css"

const navigation = [
  { component: "/", name: "Home" },
  { component: "/buscar", name: "Buscar" }
]

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <Link to={"/"}><p>Início</p></Link>
      <Link to={"/buscar"}><p>Buscar</p></Link>
    </div>
  )
}

export default Nav