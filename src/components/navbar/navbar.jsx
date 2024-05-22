import React from "react"
import './navbar.css'
import Cartwidget from "../cartwidget/cartwidget"
const Navbar=()=>{
    return(
        <div className="header">
            <a href="#" className="logo">MiTienda</a>
            <div className="navbar">
                <a href="#">Camiseta</a>
                <a href="#">Casacas</a>
                <a href="#">Zapatos</a>
                <a href="#"><Cartwidget/></a>
            </div>
        </div>
    )
}

export default Navbar