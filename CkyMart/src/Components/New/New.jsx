import React from 'react'
import newarr from '../Images/new_collections'
import Item from '../Items/Items'
const New = () => {
  return (
    <div>
      <div className="new">
        <h3>New Collections</h3>
          <div className="items">
            {
                newarr.map((item,i)=>{
                    return <Item key={i} id={item.id} image={item.image} name={item.name} new={item.new_price} old={item.old_price}/>
                })
            }
          </div>
      </div>
    </div>
  )
}

export default New
