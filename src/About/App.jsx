import React from "react";
import teamImage from "/images/team.webp"; // Make sure this path is correct
import logo from "/images/logo-ghoomakkads (2).png";
import profilePic from "/images/host1.jpg";

const AboutUs = () => {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div>
      <>
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full  bg-rose-400 px-20 py-4 shadow-md">
        <nav className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="px-8 flex items-center">
            <img src={logo} alt="Ghoomakkads Logo" width="70" height="70" />
            <h1 className="text-2xl text-left font-bold text-white hidden sm:block">Ghoomakkads</h1>
          </div>

          {/* Navigation Menu */}
          <nav className="flex gap-6 lg:gap-10 items-center list-none">
              <a
                onClick={() => navigateTo("Home.html")}
                className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer   "
              >
                Home
              </a>
              <a
                onClick={() => navigateTo("AboutUs.html")}
                className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer"
              >
                About Us
              </a>
              <a
                onClick={() => navigateTo("ContactUs.html")}
                className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer"
              >
                Contact Us
              </a>
            <a onClick={() => navigateTo('Profile.html')} className="cursor-pointer">
                <img src="/images/host1.jpg" alt="Profile" width="40" height="40" className="rounded-full" />
              </a>
          </nav>
        </nav>
      </header>
      </>

      {/* Main Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 lg:py-24 gap-10">
        {/* Text Content */}
        <div className="max-w-xl">
          <h2 className="text-6xl font-['Abril_Fatface'] font-bold py-10 font-bold mb-0 text-rose-800">
            What we <span className="text-gray-700">offer!!</span>
          </h2>
          <p className="mb-1 text-xl text-gray-600 leading-relaxed">
            <strong>"Affordable Travel Planning Made Simple"</strong> – Explore the ultimate
            travel companion app that helps you create budget-friendly trip plans.
            It suggests top hotels, restaurants, and transportation options within your budget.
            Whether for a weekend getaway or a longer vacation, our app maximizes value while
            maintaining quality. Save time and plan effortlessly with our smart budgeting feature!
          </p>
          <p className="mb-1 text-xl text-gray-600 leading-relaxed">
            <strong>"Explore Hidden Gems with Our Solo Travel Guide"</strong> – Discover
            peaceful nature spots and unique landmarks with personalized recommendations,
            ensuring your solo journeys are unforgettable.
          </p>
          <p className="mb-2 text-xl text-gray-600 leading-relaxed">
            <strong>"Embark on Exciting Adventures with New Friends!"</strong> – Experience
            spontaneity with our surprise trip feature! Connect with fellow travelers and a
            dedicated host. Just pack your bags for an unforgettable experience!
          </p>
          <button
            onClick={() => navigateTo("ContactUs.html")}
            className="text-white w-60 h-15 px-6 py-2 bg-rose-400 hover:bg-rose-500 hover:w-60 h-15 px-6 py-2 text-white transition"
          >
            Contact Us
          </button>
        </div>

        {/* Image */}
        <div>
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
      <footer className="fixed bottom-0 left-0 w-full bg-rose-400 text-white text-center py-4 text-sm z-50">
        <p>© The Ghoomakkads</p>
      </footer>
    </div>
  );
};

export default AboutUs;
