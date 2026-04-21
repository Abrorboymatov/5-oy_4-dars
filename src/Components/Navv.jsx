
import Logo from '../assets/Logoo.svg'
import { Link } from 'react-router-dom';

import React, { useState } from 'react';

export default function Navv ()  {
  // Menyu ochiq yoki yopiqligini tekshirish uchun state
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative ">
      {/* Asosiy Navbar qismi */}
      <div className=" px-[30px] py-[28px]  md:px-[160px] flex justify-between items-center relative z-50">
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
        <div className={`
          fixed top-0 right-0 h-full w-64 flex flex-col items-start p-8 space-y-6 
          transform transition-transform duration-300 ease-in-out z-50
          md:relative md:flex-row md:translate-x-0 md:h-auto md:w-auto md:p-0 md:space-y-0 md:space-x-6
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <Link to="/" className="text-[white] md:text-[#4F5665] hover:text-blue-400">Home</Link>
          <Link to="/app2" className="text-[white] md:text-[#4F5665] hover:text-blue-400">Service</Link>
          <a href="#" className="md:text-[#4F5665] text-[white] hover:text-blue-400">Features</a>
          <a href="#" className="md:text-[#4F5665] text-[white] hover:text-blue-400">Pricing</a>
          <a href="#" className="md:text-[#4F5665] text-[white] hover:text-blue-400">Testimonials</a>
          <a href="#" className="md:text-[#4F5665] text-[white] hover:text-blue-400">Help</a>
        
        
          </div>
          <div className='hidden md:block md:flex gap-4 items-center'>
             <a href="#" className="hidden md:block md:text-[#4F5665] text-[#0B132A] px-4 py-2 rounded hover:bg-blue-700">Sign In</a>
         <button className='hidden md:block text-[#F53855] border border-[#F53855] rounded-[50px] text-4 px-[45px] py-[13px] max-w-[150px]'>Sign Up</button>
          </div>
        
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