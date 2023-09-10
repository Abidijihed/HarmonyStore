import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import SignupPage from "./components/auth/SignUp";
import SignInPge from "./components/auth/SignIn";
import Home from "./components/Home";
import PrivateRoute from "./components/user/PrivateRoute";
import ProfilePage from "./components/user/Profile";
import ListProducts from "./components/products/ListProducts";
import { useDispatch, useSelector } from "react-redux";
import {  get_product } from "./redux/action/ProductAction";
import Checkout from "./components/order/Checkout";
import Contact from "./components/information/Contact";
import About from "./components/information/About";
import Footer from "./Footer";
import ProductsFiltrer from "./components/FiltrageProductsjs/ProductsFiltrer";
import ProductInfo from "./components/FiltrageProductsjs/ProductInfo";
import PrivetOrder from "./components/user/PrivetOrder";
import UserOrder from "./components/information/UserOrder";
import MyOrder from "./components/user/MyOrder";
import axios from "axios";
import Service from "./components/information/Service";
import ForgetPassword from "./components/auth/ForgetPassword";
import ResetPassword from "./components/auth/ResetPassword";
import ResetPsswordSeccuss from "./components/auth/ResetPsswordSeccuss";
function App() {
const [productItemslen,setproductItemslen]=useState([])
const [searchResults, setSearchResults] = useState([]);
const [navbarprice,setnavbarprice]=useState(0)
const [search,setSearch]=useState("")
   const dispatch=useDispatch()
   const getlen=()=>{
    var productItems=JSON.parse(localStorage.getItem("cart"))
    setproductItemslen(productItems)

  }
   useEffect(()=>{
    dispatch(get_product())
    getlen()
   },[dispatch])
   const products=useSelector((state)=>state.UserReducer.data)
 const handelsearch=(e)=>{
  const search = e.target.value;
  setSearch(search);

  axios.get(`https://www.harmonystore01.com/api/search?q=${search}`)
  .then((response) => {

    setSearchResults(response.data);
  })
  .catch((error) => {
    console.error("Error searching for products: " + error);
  });
 }
  const gettotalprice=()=>{
    var totalPrice=JSON.parse(localStorage.getItem('cart'))
    for (let i=0;totalPrice.length>i;i++) {
     totalPrice=Number(totalPrice[i].price)* Number(totalPrice[i].quantity)
    }
    localStorage.setItem('totalPrice',totalPrice)
    var totalget=localStorage.getItem('totalPrice')
    setnavbarprice(totalget)
    
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar navbarprice={navbarprice} productItemslen={productItemslen} handelsearch={handelsearch} searchResults={searchResults} search={search} />
       
        <br />
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<SignInPge />} />
          <Route path="/" element={<Home products={products}getlen={getlen} search={search}/>} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
           <Route path="/productinfo/:id" element={<ProductInfo getlen={getlen} gettotalprice={gettotalprice}  />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path='/products' element={<ListProducts data={products}  getlen={getlen} search={search}/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:category" element={<ProductsFiltrer products={products}getlen={getlen}  />} />
          <Route path="/userorder" element={
            <PrivetOrder>
              <UserOrder />
            </PrivetOrder>
          } />
         <Route path="/monorder" element={<MyOrder />} />
         <Route path="/service" element={<Service />} />
         <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/password/reset/:resetToken" element={<ResetPassword />} />
          <Route path="/password-reset/seccess" element={<ResetPsswordSeccuss />} />

          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
