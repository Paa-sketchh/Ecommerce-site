import React from 'react'
import Handlogo from '../Images/hand_icon.png'
import Rightimg from '../Images/hero_image.png'
import Arrow from '../Images/arrow.png'
import './Data.css'
const Data = () => {
    return (
        <div className='Data'>
            <div className="left">
                <h2>New Arrivals!!</h2>
                <div className='hand'>
                    <p>new</p>
                    <img src={Handlogo} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
                <div className="lbtn">
                    <button>Latest Collections <img src={Arrow} alt="" /></button>
                </div>
            </div>
            <div className="right">
                <img src={Rightimg} alt="" />

            </div>
        </div>
    )
}

export default Data
