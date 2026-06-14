import React, { useState } from 'react';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/auth/login', {
        email,
        password,
      });
      console.log("Login successful", res.data);
      alert("Login successful!");
       // Save user (important for navbar/profile)
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", res.data.token);

    window.location.href = "/";

    // Redirect based on role
    if (res.data.user.role === "vendor") {
      navigate("/");
    } else {
      navigate("/");
    }

    } catch (error) {
      console.error("Login failed", error.response?.data || error.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/auth/register', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log("Signup successful", res.data);
      alert("Account created successfully!");
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
        {isLogin ? 'Login' : 'Create an Account'}
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
          type="submit"
          className="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-700"
        >
          {isLogin ? 'Login' : 'Create Account'}
        </button>
      </form>

      <div className="mt-4 flex items-center justify-center space-x-2">
        <div className="h-px bg-gray-300 flex-grow" />
        <span className="text-sm text-gray-500">or continue with</span>
        <div className="h-px bg-gray-300 flex-grow" />
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded shadow hover:shadow-md"
        >
          <FcGoogle className="text-xl" />
          <span className="text-sm font-medium text-gray-700">Google</span>
        </button>

        <button
          onClick={handleFacebookLogin}
          className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
        >
          <FaFacebookF className="text-xl" />
          <span className="text-sm font-medium">Facebook</span>
        </button>
      </div>

      <div className="mt-4 text-center text-sm text-gray-600">
        {isLogin ? (
          <>
            Don’t have an account?{' '}
            <button
              className="text-pink-700 hover:underline"
              onClick={() => setIsLogin(false)}
            >
              Sign up here
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button
              className="text-pink-600 hover:underline"
              onClick={() => setIsLogin(true)}
            >
              Login here
            </button>
          </>
        )}
      </div>
    </div>
  );
}