import React from 'react';
import heroImg from '../assets/images/edit1.jpg';

const Main = () => {
  return (
    <main className="pt-28">
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-cover bg-no-repeat bg-center relative">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between relative gap-10">
          {/* Text Content */}
          <div className="max-w-xl text-left lg:text-left z-2 lg:py-20 px-0">
            <p className="text-yellow-600 font-['Brush_Script_MT',cursive] md:text-4xl text-xl mb-2">
              Aao Ghoomne Chaleen
            </p>
            <h2 className="text-4xl sm:text-7xl font-['Abril_Fatface'] font-bold text-gray-800 mb-4">
              The Ghoomakkads
            </h2>
            <p className="text-base px-2 py-3 sm:text-2xl text-gray-500 lg:mb-6 font-medium">
              <b>
                You tired of dull trips?<br />
                We have something exciting just for you!<br />
                We organize surprise trips where the destination remains a thrilling mystery until the last moment.<br />
                We'll put together a group of verified travelers who share similar travel styles to enhance your experience.
              </b>
            </p>
            <button
              onClick={() => window.location.href = '/register'}
              className="text-white md:w-60 md:text-2xl text-xl hover:text-xl md:hover:text-2xl md:h-15 px-6 py-2 bg-rose-400 hover:bg-rose-500 hover:text-white transition md:hover:w-60 hover:h-15 hover:px-6 hover:py-2"
            >
              Register Now!
            </button>
          </div>

          {/* Hero Image */}
          <div className="sm:block hidden max-w-md w-1/2 z-10">
            <img
              src={heroImg}
              width="686"
              height="812"
              alt="hero banner"
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
