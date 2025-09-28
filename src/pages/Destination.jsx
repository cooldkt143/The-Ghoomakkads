import React, { useState } from "react";
import logo from "../assets/images/logo-ghoomakkads (2).png";
import profilePic from "../assets/images/host1.jpg";
import { IoMenuOutline } from "react-icons/io5"; // Using react-icons for menu
import Body from "../components/Body"; // Assuming you have a Body component for the main content

const Destination = () => {
  const [navActive, setNavActive] = useState(false);
  const [showProfile, setShowProfile] = useState(true);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const navigateTo = (path) => {
    window.location.href = path;
    // Later, you can replace this with React Router's `useNavigate()` for SPA navigation
  };

  return (
    <div>
      {/* Header Section */}
      <header className={`fixed top-0 left-0 w-full bg-gray-700 px-0 py-1 lg:py-2 lg:px-20 shadow-md z-50`}>
        <div className="flex container mx-auto items-left justify-between">
          <div className="flex items-center">
            <img src={logo} width="75" height="75" alt="Ghoomakkads Logo" />
            <h1 className="text-lg font-bold text-white sm:text-2xl">Ghoomakkads</h1>
          </div>

          <div className="flex items-center md:gap-4">
            {/* Menu Icon for small screens */}
            <button className="sm:hidden p-4 text-2xl text-white font-bold" aria-label="Toggle Menu" onClick={toggleNav}>
              <IoMenuOutline size={30} />
            </button>

            {/* Navigation */}
            <nav className={`flex flex-col sm:flex-row gap-6 items-center absolute sm:static top-full left-0 w-full sm:w-auto bg-gray-400 sm:bg-gray-700 p-4 sm:p-0 transition-all duration-300 ease-in ${navActive ? 'block' : 'hidden'}`}>
              <a onClick={() => navigateTo('home.html')} className="text-white font-medium hover:underline cursor-pointer text-[18px]">Home</a>
              <a onClick={() => navigateTo('Visited.html')} className="text-white font-medium hover:underline cursor-pointer text-[18px]">Visited</a>
              <a onClick={() => navigateTo('Wishlist.html')} className="text-white font-medium hover:underline cursor-pointer text-[18px]">Wishlist</a>
            </nav>

            {/* Profile or Login/Sign Up */}
            {showProfile ? (
              <button onClick={() => navigateTo('Profile.html')} className="cursor-pointer">
                <img src={profilePic} alt="Profile" className="py-3 md:px-2 px-2 w-[50px] h-[60px] rounded-full" />
              </button>
            ) : (
              <>
                <button onClick={() => navigateTo('SignIn.html')} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Login</button>
                <button onClick={() => navigateTo('SignUp.html')} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Sign Up</button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Section */}
      <Body />

      {/* Footer (optional) */}
      {/* <footer className="bottom-0 left-0 w-full bg-gray-700 text-white text-center py-4 text-sm z-50">
        <p>© The Ghoomakkads</p>
      </footer> */}
    </div>
  );
};

export default Destination;
