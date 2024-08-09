import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Admin from './pages/Admin/Admin'
const App = () => {
  return (
    <>
    
      <BrowserRouter>
        <Navbar/>
        <Admin/>
      </BrowserRouter>
    </>
  )
}

export default App
