import React, { useState } from "react";
import teamImage from "../assets/team.webp";
import logo from "../assets/logo-ghoomakkads (2).png";
import profilePic from "../assets/host1.jpg";
import App from '../ChatBot/App';
import { IoMenuOutline } from "react-icons/io5"; // Using react-icons for menu

const AboutUs = () => {
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
      <header className={`fixed top-0 left-0 w-full bg-rose-400 px-0 py-1 lg:py-2 lg:px-20 shadow-md z-50 ${navActive ? 'bg-rose-400' : ''}`}>
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
            <nav className={` flex flex-row sm:flex flex-col sm:flex-row gap-6 items-center sm:items-center absolute sm:static top-full left-0 w-full sm:w-auto bg-rose-200 sm:bg-rose-400 p-4 sm:p-0 transition-all duration-300 ease-in ${navActive ? 'block' : 'hidden'}`}>
              <a onClick={() => navigateTo('home.html')} className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer">Home</a>
              <a onClick={() => navigateTo('AboutUs.html')} className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer">About Us</a>
              <a onClick={() => navigateTo('ContactUs.html')} className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer">Contact Us</a>


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
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-20 lg:py-30 lg:px-40 gap-10">
        {/* Text Content */}
        <div className="max-w-xl">
          <h2 className="text-2xl lg:text-6xl font-['Abril_Fatface'] font-bold py-10 mb-0 text-rose-800">
            What we <span className="text-gray-700">offer!!</span>
          </h2>
          <p className="mb-4 text-sm lg:text-xl text-gray-600 leading-relaxed">
            <strong>"Affordable Travel Planning Made Simple"</strong> – Explore the ultimate
            travel companion app that helps you create budget-friendly trip plans.
            It suggests top hotels, restaurants, and transportation options within your budget.
            Whether for a weekend getaway or a longer vacation, our app maximizes value while
            maintaining quality. Save time and plan effortlessly with our smart budgeting feature!
          </p>
          <p className="mb-4 text-sm lg:text-xl text-gray-600 leading-relaxed">
            <strong>"Explore Hidden Gems with Our Solo Travel Guide"</strong> – Discover
            peaceful nature spots and unique landmarks with personalized recommendations,
            ensuring your solo journeys are unforgettable.
          </p>
          <p className="mb-6 text-sm lg:text-xl text-gray-600 leading-relaxed">
            <strong>"Embark on Exciting Adventures with New Friends!"</strong> – Experience
            spontaneity with our surprise trip feature! Connect with fellow travelers and a
            dedicated host. Just pack your bags for an unforgettable experience!
          </p>
          <button
            onClick={() => navigateTo("ContactUs.html")}
            className="text-white text-xl lg:text-2xl w-40 lg:w-60 h-15 px-6 py-2 bg-rose-400 hover:bg-rose-500 hover:w-60 h-15 px-6 py-2 text-white transition"
          >
            Contact Us
          </button>
        </div>

        {/* Image */}
        <div className="w-13/2">
          <img
            src={teamImage}
            alt="Our Team"
            height="700"
            width="600" 
            padding="20"
            padding-right="50"
            className="max-w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </section>


      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-rose-400 text-white text-center py-4 text-sm z-50">
        <p>© The Ghoomakkads</p>
      </footer>
    </div>
  );
};

export default AboutUs;
