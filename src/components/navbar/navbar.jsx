import React from "react"
import './navbar.css'
import Cartwidget from "../cartwidget/cartwidget"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'

const Navbar=()=>{
    return(
        <div className="header">
            <Link to={'/'}>
                <a className="logo">MiTienda</a>
            </Link>
            <div className="navbar">
                <Link to={'/categoria/electronics'}>
                    <a >Camiseta</a>
                </Link>
                <Link to={'/categoria/jewelery'}>
                    <a>Casacas</a>
                </Link>
                <Link to={`/categoria/men's clothing`}>
                    <a >Calzado</a>
                </Link>
                <a><Cartwidget/></a>
            </div>
        </div>
        
        // <div className="header">
        //     <a href="#" onClick={()=> cambiarCategoria('all')} className="logo">MiTienda</a>
        //     <div className="navbar">
        //         <a href="#" onClick={()=> cambiarCategoria('electronics')}>Camiseta</a>
        //         <a href="#" onClick={()=> cambiarCategoria('jewelery')}>Casacas</a>
        //         <a href="#" onClick={()=> cambiarCategoria(`men's clothing`)}>Contacto</a>
        //         <a href="#"><Cartwidget/></a>
        //     </div>
        // </div>
    )
}

export default Navbar