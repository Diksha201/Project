import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import GuestNavbar from "./components/Navbar/GuestNavbar";
import UserNavbar from "./components/Navbar/UserNavbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import UserSignup from "./pages/UserSignup";
import VendorSignup from "./pages/VendorSignup";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import SearchResults from "./pages/SearchResults";
import Contact from "./pages/Contact";
import BookingCard from "./components/BookingCard";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Venues from "./pages/Venues";
import VendorResults from "./pages/VendorResults";
import Checkout from "./pages/Checkout";
import AddressForm from "./pages/AddressForm";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import Chatbot from "./components/Chatbot";
import VendorDetails from "./pages/VendorDetails";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDashboard";
import SearchBar from "./components/SearchBar";
import Wishlist from "./pages/Wishlist";

const App = () => {
  const [user, setUser] = useState(null);

  

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("vivahUser"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("vivahUser");
    setUser(null);
  };

  

  return (
     
      <>
      {/* {user ? <UserNavbar /> : <GuestNavbar />} */}
    
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} onLogout={handleLogout} />

      <div className="flex-grow pt-16">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/user" element={<UserSignup />} />
          <Route path="/signup/vendor" element={<VendorSignup />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookingcard" element={<BookingCard />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/dashboard" element={user ?<Dashboard /> : <Navigate to="/login"/>} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/vendors" element={<VendorResults />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/address" element={<AddressForm />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/vendor/:id" element={<VendorDetails />} />
          <Route path="/cart" element={<Cart />} />
           <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/search" element={<SearchResults />} />
                 <Route path="/usernavbarr" element={<UserNavbar />} />
                 <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </div>

      <Footer />
      <Chatbot />
    </div>
    </>
  );
};

export default App;