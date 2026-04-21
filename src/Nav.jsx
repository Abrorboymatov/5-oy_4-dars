import Logo from './assets/Logo.svg'
import { Link } from 'react-router-dom';

import React, { useState } from 'react';

export default function Nav ()  {
  // Menyu ochiq yoki yopiqligini tekshirish uchun state
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative ">
      {/* Asosiy Navbar qismi */}
      <div className="bg-[#1a1a2e] px-[30px] py-[28px] md:px-[160px] text-white flex justify-between items-center relative z-50">
        <div className="text-xl font-bold"><img src={Logo} alt="" /></div>

        {/* Hamburger tugmasi */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Menyu Linklari */}
        <ul className={`
          fixed top-0 right-0 h-full w-64 bg-[#1a1a2e] flex flex-col items-start p-8 space-y-6 
          transform transition-transform duration-300 ease-in-out z-50
          md:relative md:flex-row md:translate-x-0 md:h-auto md:w-auto md:p-0 md:space-y-0 md:space-x-6
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/app2" className="hover:text-blue-400">Service</Link></li>
          <li><a href="#" className="hover:text-blue-400">Company</a></li>
          <li><a href="#" className="hover:text-blue-400">Career</a></li>
          <li><a href="#" className="hover:text-blue-400">Blog</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact us</a></li>
          <li><a href="#" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Clone project</a></li>
        </ul>
      </div>

      {/* Orqa fonni qoraytirish (Overlay) */}
      {isOpen && (
        <div 
          onClick={toggleMenu} 
          className="fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300"
        ></div>
      )}
    </nav>
  );
};
