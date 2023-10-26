import { Link } from "react-router-dom"
import styles from  "./Header.module.css"

const navigation = [
  { component: "/", name: "Home" },
  { component: "/contact", name: "Contato" },
  { component: "/sobre", name: "Sobre" }
]

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to={"/"}><p>Home</p></Link>
      <Link to={"/contato"}><p>Contato</p></Link>
      <Link to={"/sobre"}><p>Sobre</p></Link>
      </div>
  )
}

export default Header