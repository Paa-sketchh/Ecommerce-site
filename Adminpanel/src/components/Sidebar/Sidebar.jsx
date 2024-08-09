import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import addpr from '../../assets/Product_Cart.svg'
import listpr from '../../assets/Product_list_icon.svg'
const Sidebar = () => {
  return (
    <div>
    <div className="side">
      <Link to='/addproduct'>
        <div className="add">
            <img src={addpr} alt="" />
            <p>Add Product</p>
        </div>
      </Link>
      <Link to='/listproduct'>
        <div className="add">
            <img src={listpr} alt="" />
            <p>List Products</p>
        </div>
      </Link>
    </div>
    </div>
  )
}

export default Sidebar
