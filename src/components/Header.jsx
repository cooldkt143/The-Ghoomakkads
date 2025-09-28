import React, { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import logoImg from '../assets/images/logo-ghoomakkads.png';
import profileImg from '../assets/images/host1.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [showProfile, setShowProfile] = useState(true);

  const toggleNav = () => setNavActive(!navActive);
  const navigate = useNavigate();

  return (
    <header className={`fixed top-0 left-0 w-full lg:py-2 bg-rose-400 shadow-md z-50 ${navActive ? 'bg-rose-400' : ''}`}>
      <div className="container mx-auto px-0 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoImg} width="75" height="75" className='p-3 px-3' alt="Ghoomakkads Logo" />
          <h1 className="text-lg text-left font-bold text-white sm:text-2xl sm:block">Ghoomakkads</h1>
        </div>

        <div className="flex item-center md:gap-4">
          {/* Menu Icon for small screens */}
          <a className="sm:hidden p-4 text-2xl text-white font-bold" aria-label="Toggle Menu" onClick={toggleNav}>
            <IoMenuOutline size={30} />
          </a>

          <nav className={`flex flex-row sm:flex flex-col sm:flex-row gap-6 items-center sm:items-center absolute sm:static top-full left-0 w-full sm:w-auto bg-rose-200 sm:bg-rose-400 p-4 sm:p-0 transition-all duration-300 ease-in ${navActive ? 'block' : 'hidden'}`}>
            <a onClick={() => navigate('/home')} className="text-white font-medium hover:underline text-[18px] cursor-pointer">Home</a>
            <a onClick={() => navigate('/about')} className="text-white font-medium hover:underline text-[18px] cursor-pointer">About Us</a>
            <a onClick={() => navigate('/tour')} className="text-white font-medium hover:underline text-[18px] cursor-pointer">Tours</a>
            <a onClick={() => navigate('/destination')} className="text-white font-medium hover:underline text-[18px] cursor-pointer">Destinations</a>
            <a onClick={() => navigate('/contact')} className="text-white font-medium hover:underline text-[18px] cursor-pointer">Contact Us</a>
            <a onClick={() => navigate('/adventurehub')} className="text-white font-medium hover:underline text-[18px] cursor-pointer">Adventure Hub</a>
          </nav>

          {showProfile ? (
            <a onClick={() => navigate('/profile')} className="cursor-pointer">
              <img src={profileImg} alt="Profile" className="py-3 md:px-2 px-2 w-[50px] h-[60px] rounded-full" />
            </a>
          ) : (
            <>
              <a onClick={() => navigate('/')} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Login</a>
              <a onClick={() => navigate('/')} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Sign Up</a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
