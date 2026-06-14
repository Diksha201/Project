import React from 'react';

export default function ResetPassword() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-pink-700 mb-4">Reset Password</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Enter your registered email" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-pink-600 text-white p-2 rounded">Send Reset Link</button>
      </form>
    </div>
  );
}