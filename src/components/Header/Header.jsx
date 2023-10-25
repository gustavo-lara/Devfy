import { Link } from "react-router-dom"

const navigation = [
  { component: "/", name: "Home" },
  { component: "/contact", name: "Contato" },
  { component: "/sobre", name: "Sobre" },
  { component: "/login", name: "Login" },
]

const Header = () => {
  return (
    <nav>
      {/* <Link to={"/"}>Home</Link>
        // <Link to={"/contact"}>Contato</Link> */}
      {/* metodo de fazer 1 a 1 na mão */}
      <Link to={"/"}>Home</Link>
      <Link to={"/contato"}>Contato</Link>
      <Link to={"/sobre"}>Sobre</Link>

    </nav>
  )
}

export default Header