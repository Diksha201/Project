// import { useState } from "react";
import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  CalendarCheck,
  User,
  Gift,
  Bell,
  LogOut,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

export default function UserNavbar() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const [cartCount, setCartCount] = useState(0);

useEffect(() => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  setCartCount(cart.length);
}, []);

  return (
      <nav className="fixed top-0 left-0 w-full bg-pink-900 shadow-lg px-6 py-4 z-50">
        <div className="flex justify-between items-center">
      
      {/* LOGO */}
      
      <Link to="/" className="flex items-center space-x-2">
       <img
              src="/logo5.png"
              alt="Logo"
              className="w-12 h-12 brightness-200 border-4 border-white shadow-lg"
            />
             <h1 className="text-xl font-bold text-white hover:text-pink-100">
              VivaahVows
            </h1>
        
      </Link>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-6">

        <Link to="/wishlist" title="Wishlist">
          <Heart className="text-white hover:text-pink-600 cursor-pointer" />
        </Link>

        <Link to="/bookings" title="Bookings">
          <CalendarCheck className="text-white hover:text-pink-600 cursor-pointer" />
        </Link>

       <Link to="/cart" title="Cart" className="relative">
  <ShoppingCart className="text-white hover:text-pink-600 cursor-pointer" />

</Link>
        

        {/* PROFILE */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-full bg-white text-pink-900 flex items-center justify-center"
          >
            <User />
          </button>

          {/* DROPDOWN */}
          {open && (
            <div className="absolute right-0 mt-3 w-56 bg-white shadow-lg rounded-xl border z-50">
              
              <Link
                to="/profile"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
              >
                <User size={18} /> Edit Profile
              </Link>

               <Link
                to="/address"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
              >
                <User size={18} /> Edit Address
              </Link>

              <Link
                to="/gift-cards"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
              >
                <Gift size={18} /> Gift Cards
              </Link>

              <Link
                to="/notifications"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
              >
                <Bell size={18} /> Notifications
              </Link>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-pink-600 hover:bg-red-50"
              >
                <LogOut size={18} /> Logout
              </button>
            </div>
           
          )}
           </div>
        </div>
      </div>
    </nav>
  );
}