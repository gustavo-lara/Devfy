import "./App.css"
import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from "./components/Nav/Nav.jsx"
import Footer from "./components/Footer/Footer.jsx"

const App = () => {
    return (
        <>
            <Outlet />
        </>
    )
}

export default App