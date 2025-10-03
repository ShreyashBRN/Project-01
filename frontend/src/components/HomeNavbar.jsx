import React from 'react';
import logo from '../assets/image.png';

const HomeNavbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-2 w-full bg-[#f6f6f6]">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img className="h-[60px] w-[60px] border-4 border-black" src={logo} alt="Logo" />
      </div>

      {/* Right: Menu items */}
      <div className="flex gap-6">
        <ul className='bg-white w-24 h-10 pt-1 border-2 rounded-2xl  border-gray-400 text-center'>About</ul>
        <ul className='bg-white w-24 h-10 pt-1 border-2 rounded-2xl  border-gray-400 text-center'>SignUp</ul>
        <ul className='bg-white w-24 h-10 pt-1 border-2 rounded-2xl  border-gray-400 text-center'>Login</ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;