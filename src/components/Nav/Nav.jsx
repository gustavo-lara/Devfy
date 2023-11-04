import { Link } from "react-router-dom"
import styles from "./Nav.module.css"
import logowhite from "../../assets/logowhite.png"

const navigation = [
  { component: "/", name: "Home" },
  { component: "/buscar", name: "Buscar" }
]

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <img className={styles.logo} src={logowhite} alt="" />
      <div className={styles.links}>
      <Link to={"/"}><p>Início</p></Link>
      <Link to={"/buscar"}><p>Buscar</p></Link>
      </div>
    </div>
  )
}

export default Nav