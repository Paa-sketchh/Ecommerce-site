import React from 'react'
import { useContext } from 'react'
import { Shopcontext } from '../../Context/Shopcontext'
import Cross from '../Images/cart_cross_icon.png'
const cartitem = () => {
    window.scrollTo(0,0);
    const {all_product,cartitem,deletecart}=useContext(Shopcontext);
    let totalprice=0;
    let ship=300;
  return (
    <div>
    <h3>Products</h3>
      <div className="head">
        <p>ProductName</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Remove Item</p>
      </div>
      <div className="prod">
        {all_product.map((e)=>{
           
           // console.log(e.id,cartitem[e.id]);
            if(cartitem[e.id]>0)
            {  totalprice=totalprice+(80*e.new_price*cartitem[e.id]);
              return  (<>
                <div className="proditem" >
                 <p>{e.name}</p>
                  <img src={e.image} alt="" />
                 <p>Rs {e.new_price*80}</p>
                 <p>{cartitem[e.id]}</p>
                 <p>Rs {80*e.new_price*cartitem[e.id]}</p>
                 <img src={Cross} onClick={()=>deletecart(e.id)} alt="" />
                </div>
                </>
              )
            }
        })}
      </div>
      <div className="totals">
        <h2>Cart Totals</h2>
        <h5>Total Price</h5>
        <p>Rs {totalprice}</p>
        <h5>Shipping Charges</h5>
        <p>Rs {ship}</p>
        <h4>Total Amount</h4>
        <h5>Rs {totalprice+ship}</h5>
        <button>Proceed to Payment</button>
        <p>Apply Promo Card</p>
        <div className="pro">
        <input type="text" placeholder='Enter Promocode'/>
        <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default cartitem
