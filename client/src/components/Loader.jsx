import React from 'react';
import logo from '../assets/images/logo5.png';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <img
        src={logo}
        alt="Loading..."
        className="w-20 h-20 animate-spin-slow drop-shadow-glow"
      />
    </div>
  );
};

export default Loader;