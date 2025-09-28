import React, { useState, useEffect } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import logoImg from '../assets/images/logo-ghoomakkads.png';
import profileImg from '../assets/images/host1.jpg';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleNav = () => setNavActive(!navActive);

  // Detect scroll for blur effect
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
    : 'backdrop-blur-xl ';

  const navItems = ['Home', 'About', 'Tour', 'Destination', 'Contact', 'AdventureHub'];

  return (
    <header
      className={`fixed top-0 left-0 w-full py-2 z-50 transition-all duration-500 ${bgClass}`}
    >
      {/* Full width flex container */}
      <div className="flex items-center justify-between w-full px-4 pl-10">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-full p-2 flex items-center justify-center">
            <img src={logoImg} width="40" height="40" alt="Ghoomakkads Logo" className="rounded-full" />
          </div>
          <h1 className="text-lg sm:text-2xl font-bold text-white">Ghoomakkads</h1>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden sm:flex gap-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => navigate(`/${item.toLowerCase().replace(/\s/g, '')}`)}
              className="text-white font-medium text-[18px] px-4 py-2 rounded-md bg-gray-600 backdrop-blur-xl bg-white/10 hover:bg-gray-800 transition"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right: Profile / Login / Sign Up */}
        <div className="flex items-center gap-2 pr-10">
          {showProfile ? (
            <button onClick={() => navigate('/profile')}>
              <img src={profileImg} alt="Profile" className="w-[50px] h-[50px] rounded-full" />
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

          {/* Mobile menu toggle */}
          <button
            className="sm:hidden text-white text-2xl p-2"
            aria-label="Toggle Menu"
            onClick={toggleNav}
          >
            <IoMenuOutline size={30} />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {navActive && (
        <div className="sm:hidden flex flex-col gap-2 w-full bg-rose-400/30 backdrop-blur-xl p-4 absolute top-full left-0 z-40">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                navigate(`/${item.toLowerCase().replace(/\s/g, '')}`);
                setNavActive(false);
              }}
              className="text-white font-medium text-[18px] px-4 py-2 rounded-md backdrop-blur-xl bg-white/10 hover:bg-white/20 transition w-full text-center"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
