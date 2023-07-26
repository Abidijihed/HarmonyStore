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
function App() {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0); // State to keep track of the number of items in the cart

  useEffect(() => {
    // Fetch the products from your backend API
    // Replace 'your_backend_api_url/products' with your actual backend API endpoint
    fetch('http://localhost:5700/api/get_All_product')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    // Fetch the cart items using the user_id from the backend API
    // Replace 'your_backend_api_url/cart-items' with your actual backend API endpoint
    fetch('your_backend_api_url/cart-items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: 1 }), // Replace '1' with the actual user_id (if applicable)
    })
      .then((response) => response.json())
      .then((data) => setCartItems(data))
      .catch((error) => console.error('Error fetching cart items:', error));
  }, []);

  useEffect(() => {
    // Update the cart count whenever the cart items change
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
  }, [cartItems]);

  const addToCart = (productId, quantity) => {
    const user_id=localStorage.getItem("id")
    // Call the backend API to add the product to the cart
    // Replace 'your_backend_api_url/add-to-cart' with your actual backend API endpoint
    fetch('your_backend_api_url/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id, product_id: productId, quantity }), // Replace '1' with the actual user_id (if applicable)
    })
      .then((response) => response.json())
      .then((data) => {
        // Fetch the updated cart items after successful addition
        fetch('http://localhost:5700/api/cart-items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: 1 }), // Replace '1' with the actual user_id (if applicable)
        })
          .then((response) => response.json())
          .then((data) => setCartItems(data))
          .catch((error) => console.error('Error fetching cart items:', error));
      })
      .catch((error) => console.error('Error adding to cart:', error));
  };


  return (
    <>
      <BrowserRouter>
        <Navbar cartCount={cartCount}/>
       
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
