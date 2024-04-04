import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"

import Home from "./pages/HomePage.jsx";
import CarListing from "./pages/CarListing.jsx"
import CarDetails from "./pages/CarDetails.jsx"
import CheckOut from "./pages/CheckOut.jsx"
import UserAccount from "./pages/UserAccount.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Login from "./pages/LoginPage.jsx"
import Register from "./pages/Register.jsx"
import Layout from './Layout.jsx';

function App() {
  return (



    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />

        <Route path="cars" element={<CarListing />} />
        <Route path="cars/:carId" element={<CarDetails />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="account" element={<UserAccount />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>




  );
}

export default App;
