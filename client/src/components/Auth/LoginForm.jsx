import React, { useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });

      const user = res.data.user; // backend must return user object

      dispatch(setUser(user)); // Redux + localStorage

      alert("Login successful!");

      // Redirect based on role
      if (user.role === "vendor") {
        navigate("/vendor/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } catch (error) {
      console.error("Login failed", error.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });

      alert("Account created successfully! Please login.");
      setIsLogin(true);
    } catch (error) {
      console.error("Signup failed", error.response?.data || error.message);
      alert("Signup failed. Try again.");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5001/api/auth/google";
  };

  const handleFacebookLogin = () => {
    window.location.href = "http://localhost:5001/api/auth/facebook";
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-pink-700 mb-4">
        {isLogin ? "Login" : "Create an Account"}
      </h2>

      <form className="space-y-4" onSubmit={isLogin ? handleLogin : handleSignup}>
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 border rounded"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 border rounded"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
            onClick={() => navigate("/dashboard")}
        
          type="submit"
          className="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-700"
        >
          {isLogin ? "Login" : "Create Account"}
        </button>
      </form>

      {/* SOCIAL LOGIN */}
      <div className="mt-4 flex items-center justify-center space-x-2">
        <div className="h-px bg-gray-300 flex-grow" />
        <span className="text-sm text-gray-500">or continue with</span>
        <div className="h-px bg-gray-300 flex-grow" />
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center gap-2 bg-white border px-4 py-2 rounded shadow"
        >
          <FcGoogle className="text-xl" /> Google
        </button>

        <button
          onClick={handleFacebookLogin}
          className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded text-white"
        >
          <FaFacebookF /> Facebook
        </button>
      </div>

      {/* TOGGLE */}
      <div className="mt-4 text-center text-sm text-gray-600">
        {isLogin ? (
          <>
            Don’t have an account?{" "}
            <button className="text-pink-700" onClick={() => setIsLogin(false)}>
              Sign up here
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button 
            className="text-pink-600" onClick={() => setIsLogin(true)}>
              Login here
            </button>
          </>
        )}
      </div>
    </div>
  );
}