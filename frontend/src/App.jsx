import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import { useState } from 'react'
import Chetan from './components/chetan/Chetan'
import Verify from './pages/Verify/Verify'
import FoodDetail from './components/ProductDetail/ProductDetails'
import ProductDetails from './components/ProductDetail/ProductDetails'
import ProductsYouMayLike from './components/ProductYouMayLike/ProductsYouMayLike'
import MyOrders from './pages/MyOrders/MyOrders'
import MoreDetails from './pages/MoreDetails/MoreDetails'


const App = () => {

  const[showLogin,setShowLogin] = useState(false)
  return (
  <>
  {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
   <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes> {/* Routes means page change hota hai na woh  .. and necessary thing browser import whihc is used in main.jsx  */}
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order'element={<PlaceOrder/>} />
      <Route path='/chetan' element={<Chetan/>} />
      <Route path='/verify' element={<Verify/>} />
      <Route path='/myorders' element={<MyOrders/>} />
      
      <Route path='/product-detail/:id' element={<ProductDetails />} />
      <Route path='/productyoumaylike' element={<ProductsYouMayLike />} />
      <Route path='/moredetails' element={<MoreDetails/>} />




      
      </Routes>
      
    </div>
    <Footer/>
  </>
   
    
    
  )
}

export default App
