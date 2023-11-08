import "./App.css"
import { Outlet } from 'react-router-dom'
import React from 'react'
import Nav from "./components/Nav/Nav.jsx"
import Biblioteca from "./components/Biblioteca/Biblioteca.jsx"

const App = () => {
    return (
        <div className="Body">
            <div className="Coluna">
            <Nav/>
            <Biblioteca/>
            </div>
            <Outlet />
            </div>
    )
}

export default App