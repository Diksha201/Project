// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaUserCircle } from 'react-icons/fa';

// const ProfileDropdown = ({ user, onLogout }) => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     onLogout();
//     navigate('/login');
//   };

//   return (
//     <div className="relative inline-block text-left">
//       <div className="cursor-pointer flex items-center gap-2" onClick={() => setOpen(!open)}>
//         {user?.profilePic ? (
//           <img
//             src={user.profilePic}
//             alt="Profile"
//             className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
//           />
//         ) : (
//           <FaUserCircle className="text-3xl text-gray-600" />
//         )}
//         <span className="text-sm">{user?.firstName}</span>
//       </div>

//       {open && (
//         <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
//           <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">My Profile</Link>
//           <Link to="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-100">Dashboard</Link>
//           <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileDropdown;