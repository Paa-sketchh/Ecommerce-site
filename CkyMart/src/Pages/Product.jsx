import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Shopcontext } from '../Context/Shopcontext';
import './Css/product.css'
const Product = () => {
  window.scrollTo(0,0);
  const {productid}=useParams();
  const {all_product}=useContext(Shopcontext);
  const {addcart}=useContext(Shopcontext);
  const idd=all_product.find((a)=>{return a.id===parseInt(productid)})
  return (
    <div>
      <img src={idd.image} alt="" />
      <button onClick={()=>addcart(idd.id)}>AddtoCart</button>
    </div>
  )
}

export default Product
