import React, { useState } from 'react';
import axios from 'axios';

const VendorSignup = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', { 
       firstName: formData.businessName,
  lastName: "",
  email: formData.email,
  password: formData.password,
  role: "vendor"
      });
      alert('Vendor registered successfully!');
    } catch (error) {
      alert(error.response.data.message || 'Signup failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 to-pink-200">
      <form
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Vendor Sign Up</h2>

        <input
          type="text"
          name="businessName"
          placeholder="Business Name"
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default VendorSignup;