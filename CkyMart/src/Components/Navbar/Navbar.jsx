import React from 'react'
import Imagelogo from '../Images/logocky.png'
import Imagecart from '../Images/cart_icon.png'
import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Shopcontext } from '../../Context/Shopcontext'
const Navbar = () => {
  const [item,setitem]=useState("Shop");
  const {gettotalitems}=useContext(Shopcontext);
  return (
    <div className='Navbar'>
    <div className='Navlogo'>
      <img src={Imagelogo} alt="logo" />
    </div>
      <ul className='Navitems'>
        <li onClick={()=>{setitem("Shop");}}><Link to='/'>Shop</Link>{(item==="Shop"?<hr/>:<></>)}</li>
        <li onClick={()=>{setitem("Mens");}}><Link to='/mens'>Mens</Link>{(item==="Mens"?<hr/>:<></>)}</li>
        <li onClick={()=>{setitem("Womens");}}><Link to='/womens'>Womens</Link>{(item==="Womens"?<hr/>:<></>)}</li>
        <li onClick={()=>{setitem("Kids");}}><Link to='/kids'>Kids</Link>{(item==="Kids"?<hr/>:<></>)}</li>
      </ul>
      <div className='log'>
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>:<Link to='/login'><button >Login</button></Link>}
        
        <Link to='/cart'><img src={Imagecart} alt="" /></Link>
        <div className='countitem'>{gettotalitems()}</div>
      </div>
    </div>
  )
}

export default Navbar
