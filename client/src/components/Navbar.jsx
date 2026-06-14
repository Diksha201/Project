// import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import ProfileDropdown from './ProfileDropdown';

// const Navbar = ({ user, onLogout }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
  

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full bg-pink-900 shadow-lg px-6 py-4 z-50">
//         <div className="flex justify-between items-center">
//           <NavLink to="/" className="flex items-center space-x-2">
//             <img
//               src="/logo5.png"
//               alt="Logo"
//               className="w-12 h-12 brightness-200 border-4 border-white shadow-lg"
//             />
//             <h1 className="text-xl font-bold text-white hover:text-pink-100">
//               VivaahVows
//             </h1>
//           </NavLink>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//            {user ? (
//           <ProfileDropdown user={user} onLogout={onLogout} />
//         ) : (
//           <>
          
//             <Link to="/" className="text-white hover:text-pink-100 font-bold">Home</Link>
//             <Link to="/services" className="text-white hover:text-pink-100 font-bold">Vendors</Link>
//             <Link to="/bookings" className="text-white hover:text-pink-100 font-bold">Bookings</Link>
//             {/* <Link to="/services" className="text-white hover:text-pink-100 font-bold">Services</Link> */}
//             <Link to="/venues" className="text-white hover:text-pink-100 font-bold">Venues</Link>
//             <Link to="/login" className="text-white hover:text-pink-100 font-bold">Login</Link>
//             <Link to="/contact" className="text-white hover:text-pink-100 font-bold">Contact</Link>
//             </>
//         )}
//           </div>

//           {/* Hamburger for Mobile */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu}>
//               {isOpen ? <X className="text-white  w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Sidebar Overlay (Mobile) */}
//       <div className={`fixed top-0 left-0 h-full w-0.5/3 bg-pink-900 text-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//         <div className="flex flex-col mt-20 space-y-5 px-6">
//           <Link to="/" onClick={toggleMenu} className="hover:text-pink-100 text-lg font-semibold">Home</Link>
//           <Link to="/services" onClick={toggleMenu} className="hover:text-pink-100 text-lg font-semibold">Vendors</Link>
//           <Link to="/bookings" onClick={toggleMenu} className="hover:text-pink-100 text-lg font-semibold">Bookings</Link>
//           {/* <Link to="/services" onClick={toggleMenu} className="hover:text-pink-100 text-lg font-semibold">Services</Link> */}
//           <Link to="/venues" onClick={toggleMenu} className="hover:text-pink-100 text-lg font-semibold">Venues</Link>
//           <Link to="/login" onClick={toggleMenu} className="hover:text-pink-100 text-lg font-semibold">Login</Link>
//           <Link to="/contact" onClick={toggleMenu} className="hover:text-pink-100 text-lg font-semibold">Contact</Link>
//         </div>
//       </div>

//       {/* Overlay Background (optional for dimming) */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
//           onClick={toggleMenu}
//         ></div>
//       )}
//     </>
//   );
// };

// export default Navbar;