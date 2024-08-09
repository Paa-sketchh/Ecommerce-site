import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Loginsign from './Pages/Loginsign';
import Footer from './Components/Footer/Footer';
import Menban from './Components/Images/banner_mens.png'
import Womenban from './Components/Images/banner_women.png'
import Kidsban from './Components/Images/banner_kids.png'
const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory banner={Menban}  category="men"/>}/>
        <Route path='/womens' element={<Shopcategory banner={Womenban} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory banner={Kidsban} category="kid"/>}/>
        <Route path='/products' element={<Product/>}>
          <Route path=':productid' element={<Product/>}/>
        </Route>
        <Route path='/login' element={<Loginsign/>}/> 
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  
    </>
  )
}

export default App
