import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import logo from '../assets/logo-ghoomakkads.png';
import profilePic from '../assets/host1.jpg'; // Replace with your actual profile image
import bgImg from '../assets/tcbg.jpg';

const TravelHostCommunity = () => {
  const [navActive, setNavActive] = useState(false);
  const [showProfile, setShowProfile] = useState(true); // Simulated auth state

  const toggleNav = () => setNavActive(!navActive);

  const navigateTo = (url) => {
    window.location.href = url;
  };

  const hosts = [
    {
      name: "Tejaswini Sabat",
      location: "Madhya Pradesh, India",
      specialty: "Group Tours & Solo Experiences",
      image: "/src/assets/host1.jpg",
    },
    {
      name: "Ridesh Sharma",
      location: "Gangtok, Shillong",
      specialty: "Trekking & Food Tastings",
      image: "/src/assets/host2.jpg",
    },
    {
      name: "Aisha Khan",
      location: "Pathankot, Punjab",
      specialty: "Desert Excursions & Adventure",
      image: "/src/assets/host3.jpg",
    },
    {
      name: "Jimmy Shergill",
      location: "Nanitaal, Uttrakhand",
      specialty: "Adventure Tours & Mountain Stargazing",
      image: "/src/assets/host4.jpg",
    },
  ];

  return (
    <div className="text-gray-800 font-sans">
      {/* Header Section */}
      <header className={`fixed top-0 left-0 w-full bg-rose-400 px-0 py-1 lg:py-2 lg:px-20 shadow-md z-50 ${navActive ? 'bg-rose-400' : ''}`}>
        <div className="flex container mx-auto items-left justify-between container ">
          <div className="flex items-center">
            <img src={logo} width="75" height="75" alt="Ghoomakkads Logo" />
            <h1 className="text-lg text-left font-bold text-white sm:text-2xl sm:block">Ghoomakkads</h1>
          </div>

          <div className="flex items-center md:gap-4">
            {/* Menu Icon for small screens */}
            <a className="sm:hidden p-4 text-2xl text-white font-bold" aria-label="Toggle Menu" onClick={toggleNav}>
              <IoMenuOutline size={30} />
            </a>

            {/* Navigation */}
            <nav className={`flex flex-row sm:flex flex-col sm:flex-row gap-6 items-center sm:items-center absolute sm:static top-full left-0 w-full sm:w-auto bg-rose-200 sm:bg-rose-400 p-4 sm:p-0 transition-all duration-300 ease-in ${navActive ? 'block' : 'hidden'}`}>
              <a onClick={() => navigateTo('home.html')} className="text-white font-medium hover:underline text-[18px] cursor-pointer">Home</a>
              <a onClick={() => navigateTo('AboutUs.html')} className="text-white font-medium hover:underline text-[18px] cursor-pointer">About Us</a>
              <a onClick={() => navigateTo('ContactUs.html')} className="text-white font-medium hover:underline text-[18px] cursor-pointer">Contact Us</a>
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

      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-opacity-0 bg-center flex flex-col justify-center items-center text-center px-8 text-white mt-20 "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h1 className="text-4xl text-black text-bold md:text-5xl font-bold mb-2">Meet Our Travel Hosts</h1>
        <p className="text-lg text-black text-bold md:text-xl max-w-2xl">
          Connect with trusted local hosts to make your travel experience unforgettable.
        </p>
      </section>

      {/* Hosts Section */}
      <section className="bg-[#f38f8f] py-12 px-6 text-center mb-7 mt-[-4px]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Featured Hosts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hosts.map((host, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <img src={host.image} alt={host.name} className="w-full h-52 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-1">{host.name}</h3>
                <p className="text-sm text-gray-600 mb-1">Location: {host.location}</p>
                <p className="text-sm text-gray-600 mb-3">Specialty: {host.specialty}</p>
                <button className="text-xl hover:text-xl bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-bold hover:px-4 py-2 hover:rounded-lg transition duration-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-[#222] text-sm text-white text-center py-4">
        <p>&copy; The Ghoomakkads</p>
      </footer>
    </div>
  );
};

export default TravelHostCommunity;
