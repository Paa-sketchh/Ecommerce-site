import React from 'react'
import Item from '../Items/Items'
import './Popular.css'
import '../Images/data'
import data_product from '../Images/data'
const Popular = () => {
  return (
    <div>
      <div className="pop">
        <p>Popular Collections</p>
        <p>in Women</p>
         <div className="items">
            {data_product.map((item,i)=>{
               return <Item key={i} id={item.id} image={item.image} name={item.name} new={item.new_price} old={item.old_price}/>
            })}
         </div>
      </div>
    </div>
  )
}

export default Popular
