import React, { useState } from "react";
import teamImage from "../assets/team.webp";
import logo from "../assets/logo-ghoomakkads (2).png";
import profilePic from "../assets/host1.jpg";
import { IoMenuOutline } from "react-icons/io5"; // Using react-icons for menu
import Body from "./component/Body"; // Assuming you have a Body component for the main content

const Destination = () => {
  const [navActive, setNavActive] = useState(false);
  const [showProfile, setShowProfile] = useState(true);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const navigateTo = (path) => {
    window.location.href = path;
    // Tip: Later you can replace this with React Router's `useNavigate()`
  };

  return (
    <div >
      {/* Header Section */}
      <header className={`fixed top-0 left-0 w-full bg-gray-700 px-0 py-1 lg:py-2 lg:px-20 shadow-md z-50 ${navActive ? 'bg-gray-700' : ''}`}>
        <div className="flex container mx-auto items-left justify-between container ">
          <div className="flex items-center">
            <img src={logo} width="75" height="75"  alt="Ghoomakkads Logo" />
            <h1 className="text-lg text-left font-bold text-white sm:text-2xl sm:block">Ghoomakkads</h1>
          </div>

          <div className="flex items-center md:gap-4">
            {/* Menu Icon for small screens */}
            <a className="sm:hidden p-4 text-2xl text-white font-bold" aria-label="Toggle Menu" onClick={toggleNav}>
              <IoMenuOutline size={30} />
            </a>

            {/* Navigation */}
            <nav className={` flex flex-row sm:flex flex-col sm:flex-row gap-6 items-center sm:items-center absolute sm:static top-full left-0 w-full sm:w-auto bg-gray-400 sm:bg-gray-700 p-4 sm:p-0 transition-all duration-300 ease-in ${navActive ? 'block' : 'hidden'}`}>
              <a onClick={() => navigateTo('home.html')} className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer">Home</a>
              <a onClick={() => navigateTo('Visited.html')} className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer">Visited</a>
              <a onClick={() => navigateTo('Wishlist.html')} className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer">Wishlist</a>


            </nav>

            {/* Profile or Login/Sign Up */}
            {showProfile ? (
              <a onClick={() => navigateTo('Profile.html')} className="cursor-pointer">
                <img src={profilePic} alt="Profile" className="py-3 md:px-2 px-2 w-[50px] h-[60px] rounded-full" />
              </a>
            ) : (
              <>
                <a onClick={() => navigateTo('SignIn.html')} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Login</a>
                <a onClick={() => navigateTo('SignUp.html')} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Sign Up</a>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Section */}
      <Body />

      {/* <footer className=" bottom-0 left-0 w-full bg-gray-700 text-white text-center py-4 text-sm z-50">
        <p>© The Ghoomakkads</p>
      </footer> */}
    </div>
  );
};

export default Destination;
