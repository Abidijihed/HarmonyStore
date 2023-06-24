import React from "react";
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

function App() {
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
          <Route path='/products' element={<ListProducts/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
