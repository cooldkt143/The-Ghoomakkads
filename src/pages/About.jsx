import React from "react";
import teamImage from "../assets/images/team.webp";
import Header from "../components/Header.jsx";

const AboutUs = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-20 lg:py-[7.5rem] lg:px-40 gap-10 mt-24">
        {/* Text Content */}
        <div className="max-w-xl">
          <h2 className="text-2xl lg:text-6xl font-['Abril_Fatface'] font-bold py-10 mb-0 text-rose-800">
            What we <span className="text-gray-700">offer!!</span>
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
          <button className="text-white text-xl lg:text-2xl w-40 lg:w-60 px-6 py-2 bg-rose-400 hover:bg-rose-500 transition">
            Contact Us
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img src={teamImage} alt="Our Team" className="max-w-full h-auto rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bottom-0 w-full bg-rose-400 text-white text-center py-4 text-sm">
        <p>© The Ghoomakkads</p>
      </footer>
    </div>
  );
};

export default AboutUs;
