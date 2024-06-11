import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import ItemListContainer from './containers/itemListContainer/itemListContainer'
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [categoria, setCategoria] = useState('all')
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:id_categoria' element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
