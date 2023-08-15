import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignupPage from "./components/auth/SignUp";
import SignInPge from "./components/auth/SignIn";
import Home from "./components/Home";
import PrivateRoute from "./components/user/PrivateRoute";
import ProfilePage from "./components/user/Profile";
import ListProducts from "./components/products/ListProducts";
import { useDispatch, useSelector } from "react-redux";
import {  get_product } from "./redux/action/ProductAction";
import Checkout from "./components/order/Checkout";
function App() {
const [productItemslen,setproductItemslen]=useState([])
   const dispatch=useDispatch()
   useEffect(()=>{
    dispatch(get_product())
   },[dispatch])
   const products=useSelector((state)=>state.UserReducer.data)
 
  const getlen=()=>{
    var productItems=JSON.parse(localStorage.getItem("cart"))
    setproductItemslen(productItems)

  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar productItemslen={productItemslen} />
       
        <br />
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<SignInPge />} />
          <Route path="/" element={<Home products={products} />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path='/products' element={<ListProducts data={products}  getlen={getlen}/>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
