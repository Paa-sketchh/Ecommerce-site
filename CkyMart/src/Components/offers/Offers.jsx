import React from 'react'
import Image from '../Images/exclusive_image.png'
import './Offers.css'
const Offers = () => {
    return (
        <div>
            <div className="off">
                <div className="leftimg">
                    <p>Exclusive Offers </p>
                    <p>For You</p>
                    <h5>Only on Best sellers Products</h5>
                    <button>order now</button>
                </div>
                <div className="rightimg">
                    <img src={Image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Offers
