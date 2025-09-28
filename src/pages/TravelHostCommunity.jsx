import React, { useState } from "react";
import Header from "../components/Header.jsx"; // imported header
import bgImg from '../assets/images/tcbg.jpg';
import host1 from '../assets/images/host1.jpg';
import host2 from '../assets/images/host2.jpg';
import host3 from '../assets/images/host3.jpg';
import host4 from '../assets/images/host4.jpg';

const TravelHostCommunity = () => {
  const hosts = [
    {
      name: "Tejaswini Sabat",
      location: "Madhya Pradesh, India",
      specialty: "Group Tours & Solo Experiences",
      image: host1,
    },
    {
      name: "Ridesh Sharma",
      location: "Gangtok, Shillong",
      specialty: "Trekking & Food Tastings",
      image: host2,
    },
    {
      name: "Aisha Khan",
      location: "Pathankot, Punjab",
      specialty: "Desert Excursions & Adventure",
      image: host3,
    },
    {
      name: "Jimmy Shergill",
      location: "Nanitaal, Uttrakhand",
      specialty: "Adventure Tours & Mountain Stargazing",
      image: host4,
    },
  ];

  return (
    <div className="text-gray-800 font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-8 text-white mt-20"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h1 className="text-4xl text-black md:text-5xl font-bold mb-2">Meet Our Travel Hosts</h1>
        <p className="text-lg text-black md:text-xl max-w-2xl">
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
