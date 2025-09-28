import React from 'react';
import logoImg from '../assets/images/logo-ghoomakkads.png';
import piggyBg from '../assets/Background/piggy_bg.jpg'; // ✅ Add your background image

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${piggyBg})` }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center lg:items-start justify-center relative">
        <div className="max-w-xl text-center lg:text-left z-10 py-20 px-0 mt-20 lg:mt-32">
          <p className="text-yellow-600 font-['Brush_Script_MT',cursive] text-4xl mb-2 mt-20">
            Save a Little, Travel a Lot – With Piggy Bank,
          </p>
          <h2 className="sm:text-5xl text-3xl font-['Abril_Fatface'] font-bold text-gray-100 mb-4 drop-shadow-md">
            Collect digital coins and turn small savings into big adventures!
          </h2>
          <p className="text-base px-2 py-3 sm:text-2xl text-gray-200 mb-6 rounded-xl">
            <b>
              a smart, effortless way to save for your next adventure.<br />
              Buy digital coins worth 1 INR each, save small amounts regularly,
              and redeem them later for future trips. It’s the perfect tool to
              budget travel expenses and make your dream journeys a reality.
            </b>
          </p>
          <button className="text-white w-60 h-15 px-6 py-2 bg-gradient-to-b from-yellow-800 to-yellow-500 hover:scale-105 transition duration-300 rounded-lg">
            Pay now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
