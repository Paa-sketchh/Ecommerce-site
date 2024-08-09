import React from 'react'
import Logo from '../../assets/logocky.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className="navb">
        <img src={Logo} alt="" />
        <h3>AdminPanel</h3>
      </div>
    </div>
  )
}

export default Navbar
