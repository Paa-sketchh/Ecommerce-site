import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'
const Items = (props) => {
    // console.log(props.id,"hi");
    return (
        <>
            <div className="item">
            <Link  to={`/products/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link> 
                <p>{props.name}</p>
                <div className="prices">
                    <div className="old">
                        Rs {parseInt(props.old) * 80}
                    </div>
                    <div className="new">
                        Rs {parseInt(props.new) * 80}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Items
