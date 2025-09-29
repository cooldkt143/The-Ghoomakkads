import React, { useState, useEffect } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import logoImg from '../assets/images/logo-ghoomakkads.png';
import profileImg from '../assets/images/host1.jpg';
import { useNavigate, useLocation } from 'react-router-dom';

// ✅ Load Google Material Icons in index.html
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showProfile, setShowProfile] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/' || location.pathname === '/home';
  const bgClass = isHome
    ? scrolled
      ? 'backdrop-blur-xl'
      : 'bg-transparent'
    : 'backdrop-blur-xl';

  // ✅ Removed TravelHostCommunity
  const navItems = [
    { name: 'Home', icon: 'home' },
    { name: 'HomeStay', icon: 'hotel' },
    { name: 'Destination', icon: 'explore' },
    { name: 'LiveTrips', icon: 'travel_explore' },
    { name: 'AdventureHub', icon: 'terrain' },
    { name: 'PiggyBank', icon: 'savings' },
  ];

  return (
    <>
      {/* ✅ Fixed Top Header */}
      <header
        className={`fixed top-0 left-0 w-full py-2 z-50 transition-all duration-500 ${bgClass}`}
      >
        <div className="flex items-center justify-between w-full px-4 pl-4 md:pl-10">
          {/* Logo + Name */}
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full p-2 flex items-center justify-center">
              <img
                src={logoImg}
                width="40"
                height="40"
                alt="Ghoomakkads Logo"
                className="rounded-full"
              />
            </div>
            <h1 className="text-lg sm:text-2xl font-bold text-white">
              Ghoomakkads
            </h1>
          </div>

          {/* Center Nav (desktop only) */}
          <nav className="hidden sm:flex gap-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() =>
                  navigate(`/${item.name.toLowerCase().replace(/\s/g, '')}`)
                }
                className="text-white font-medium text-[18px] px-4 py-2 rounded-md bg-gray-600 backdrop-blur-xl bg-white/10 hover:bg-gray-800 transition"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Profile (top right) */}
          <div className="flex items-center gap-2 pr-0 md:pr-10">
            {showProfile ? (
              <button onClick={() => navigate('/profile')}>
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-[45px] h-[45px] rounded-full"
                />
              </button>
            ) : (
              <>
                <button
                  onClick={() => navigate('/')}
                  className="px-4 py-2 rounded-md text-white backdrop-blur-xl bg-white/10 hover:bg-white/20 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="px-4 py-2 rounded-md text-white backdrop-blur-xl bg-white/10 hover:bg-white/20 transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ✅ Fixed Bottom Nav (Mobile only) */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full bg-gray-900/90 backdrop-blur-lg z-50 flex justify-around py-2 border-t border-gray-700">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() =>
              navigate(`/${item.name.toLowerCase().replace(/\s/g, '')}`)
            }
            className={`flex flex-col items-center text-white px-0 py-1 ${
              location.pathname.includes(item.name.toLowerCase())
                ? 'text-blue-400'
                : ''
            }`}
          >
            <span className="material-icons text-2xl">{item.icon}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Header;
