import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopForm';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';    
import Footer from './Components/Footer/Footer';

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/makeup' element={<ShopCategory  category="makeups"/>}/>
          <Route path='/skin' element={<ShopCategory  category="skins"/>}/>
          <Route path='/hair' element={<ShopCategory category="hairs"/>}/>
          <Route path='/health' element={<ShopCategory category="healths"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
// fragrance mom&baby
