import React, { useState } from 'react';

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    userType: 'customer',
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    alert("Your message has been sent!");
    setFormData({ userType: 'customer', name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
      <div>
        <label className="block text-gray-400 font-small ">I am a:</label>
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          className="w-full border p-2 rounded text-gray-400"
        >
          <option value="customer">Customer</option>
          <option value="vendor">Vendor</option>
        </select>
      </div>

      <div>
        <label className="block font-small text-gray-400">Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded "
        />
      </div>

      <div>
        <label className="block font-small text-gray-400">Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-small text-gray-400">Message</label>
        <textarea
          name="message"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-pink-600 hover:bg-pink-800 text-white py-2 px-4 rounded "
      >
        Send Message
      </button>
    </form>
  );
}