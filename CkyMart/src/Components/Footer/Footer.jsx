import React from 'react'
import Ckymart from '../Images/CkyMart.png'
import Ins from '../Images/instagram_icon.png'
import Wh from '../Images/whatsapp_icon.png'
import Pin from '../Images/pintester_icon.png'
const Footer = () => {
  return (
    <div>
      <div className="footlogo">
       <img src={Ckymart} alt="" />
      </div>
      <div className="footlist">
        <li>Company</li>
        <li>About</li>
        <li>Products</li>
        <li>Office</li>
        <li>Contact</li>
      </div>
      <div className="social">
        <div className="ins">
            <img src={Ins} alt="" />
        </div>
        <div className="wh">
            <img src={Wh} alt="" />
        </div>
        <div className="pin">
            <img src={Pin} alt="" />
        </div>
      </div>
      <hr />
      <p>All copyrights reserved ...Copyright @2024</p>
    </div>
  )
}

export default Footer
