import React from "react";
import Header from "../components/Header.jsx";
import bgImage from "../assets/Background/AboutUs.jpg";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Overlay for blur effect */}
      <div className="absolute inset-0 bg-white/40 "></div>

      {/* Content wrapper (keeps footer at bottom) */}
      <div className="relative flex flex-col flex-grow">
        {/* Header */}
        <Header />

        {/* Main Section */}
        <section className="flex-grow flex justify-center items-center px-6 py-20 lg:py-[7.5rem] lg:px-40">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg max-w-3xl p-10 text-center">
            <h2 className="text-2xl lg:text-6xl font-['Abril_Fatface'] font-bold mb-6 text-gray-800">
              What we <span className="text-gray-500">offer!!</span>
            </h2>
            <p className="mb-4 text-sm lg:text-xl text-gray-600 leading-relaxed">
              <strong>"Affordable Travel Planning Made Simple"</strong> – Explore the ultimate
              travel companion app that helps you create budget-friendly trip plans.
            </p>
            <p className="mb-4 text-sm lg:text-xl text-gray-600 leading-relaxed">
              <strong>"Explore Hidden Gems with Our Solo Travel Guide"</strong> – Discover
              peaceful nature spots and unique landmarks with personalized recommendations.
            </p>
            <p className="mb-6 text-sm lg:text-xl text-gray-600 leading-relaxed">
              <strong>"Embark on Exciting Adventures with New Friends!"</strong> – Experience
              spontaneity with our surprise trip feature!
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="text-white text-xl lg:text-2xl w-40 lg:w-60 px-6 py-2 bg-gray-600 hover:bg-gray-800 transition rounded-lg">
              Contact Us
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-gray-800 text-white text-center py-4 text-sm">
          <p>© The Ghoomakkads</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
