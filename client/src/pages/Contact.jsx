import React from 'react';
import ContactUsForm from '../components/ContactUsForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-pink-200 py-10 px-4">
      <h1 className="text-4xl text-pink-600 font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center mb-10 text-gray-500">
        Whether you’re a customer or a vendor, we’d love to hear from you.
      </p>
      <ContactUsForm />
    </div>
  );
}