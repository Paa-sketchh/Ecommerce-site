import React, { useContext } from 'react'
import './Css/Shopcategory.css'
import { Shopcontext } from '../Context/Shopcontext'
import Item from '../Components/Items/Items'
const Shopcategory = (props) => {
  const { all_product } = useContext(Shopcontext);
  return (
    <div>
      <div className="shopcat">
        <img src={props.banner} alt="" />
        <div className="items">
          {
            all_product.map((item,i)=>{
              if(props.category===item.category)
              {
                return <Item key={i} id={item.id} image={item.image} name={item.name} new={item.new_price} old={item.old_price}/>
              }
              else{
                return <></>
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Shopcategory
