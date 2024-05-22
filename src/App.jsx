import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import ItemListContainer from './containers/itemListContainer/itemListContainer'

function App() {
  
  return (
    <div>
        <Navbar/>
        <ItemListContainer greeting='Camiseta'/>
    </div>
  )
}

export default App
