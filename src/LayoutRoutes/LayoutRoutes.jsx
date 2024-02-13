import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Home from '../Pages/Home/Home';
import Dishes from '../Pages/Dishes/Dishes';
import Booking from '../Pages/Booking/Booking';
import About from '../Pages/About/About';
import SignIn from '../Pages/SignIn/SignIn'; // Import the SignIn page component
import Register from '../Pages/Register/Register'; // Import the Register page component
import NotFound from '../Pages/NotFound/NotFound';
import OrderPage from '../Pages/Dishes/OrderPage';
import Delivery from '../Pages/Delivery/Delivery';

function LayoutRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/services" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default LayoutRoutes;
