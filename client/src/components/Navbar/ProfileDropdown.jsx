import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2"
      >
        <img
          src="/default-user.png"
          alt="profile"
          className="w-9 h-9 rounded-full"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg text-sm">
          <button onClick={() => navigate("/profile")} className="block w-full px-4 py-2 hover:bg-gray-100">
            Edit Profile
          </button>
          <button onClick={() => navigate("/gift-cards")} className="block w-full px-4 py-2 hover:bg-gray-100">
            Gift Cards
          </button>
          <button onClick={() => navigate("/notifications")} className="block w-full px-4 py-2 hover:bg-gray-100">
            Notifications
          </button>
          <button onClick={handleLogout} className="block w-full px-4 py-2 text-red-600 hover:bg-gray-100">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}