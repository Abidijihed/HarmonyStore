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
import Header from "./components/header/Header"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { add_to_card, get_product } from "./redux/action/ProductAction";
function App() {

   const dispatch=useDispatch()
   useEffect(()=>{
    dispatch(get_product())
   },[dispatch])
   const products=useSelector((state)=>state.UserReducer.data)
  const addToCart = (productId) => {
    var user_id=localStorage.getItem('id')
    dispatch(add_to_card({
      product_id: productId,
      user_id:user_id
    }))    
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
       
        <br />
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<SignInPge />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path='/products' element={<ListProducts data={products} addToCart={addToCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
