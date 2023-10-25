import "./App.css"
import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App