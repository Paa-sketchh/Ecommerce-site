import React from 'react'
import './Admin.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Addp from '../../components/addp/Addp'
import { Routes,Route } from 'react-router-dom'
import Listp from '../../components/listp/Listp'
const Admin = () => {
  return (
    <div>
    <div className="admin">
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<Addp/>}/>
        <Route path='/listproduct' element={<Listp/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default Admin
