import React from 'react';

export default function Register() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-pink-700 mb-4">Register</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <select className="w-full p-2 border rounded">
          <option value="customer">Customer</option>
          <option value="vendor">Vendor</option>
        </select>
        <button type="submit" className="w-full bg-pink-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}