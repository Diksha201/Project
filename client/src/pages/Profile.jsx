import React from 'react';

export default function Profile({ user }) {
  if (!user) return <p className="text-center mt-10">Please login to view your profile.</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-md p-6 rounded-md">
      <div className="flex items-center gap-4">
        <img src={user.profilePic} alt="Profile" className="w-20 h-20 rounded-full" />
        <div>
          <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
}