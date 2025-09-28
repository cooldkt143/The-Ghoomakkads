import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Popular = ({ popularTours }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-xl lg:text-[50px] text-center text-rose-500 font-['Brush_Script_MT',cursive] mb-2 font-medium">Featured Tours</p>
        <h2 className="text-2xl lg:text-6xl text-center font-bold font-['Abril_Fatface'] mb-10 text-gray-500">Most Popular Tours</h2>

        <ul className="grid md:grid-cols-3 gap-8">
          {popularTours.map((tour, index) => (
            <li key={index} className="bg-white h-70 lg:h-90 shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-40 lg:h-60">
                <a href="#">
                  <img src={tour.image} alt={tour.title} className="w-full h-40 lg:h-60 object-cover" />
                  <span className="absolute top-3 h-45 left-3 bg-rose-500 text-black px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <time>{tour.duration}</time>
                  </span>
                </a>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex text-yellow-400 text-xl">
                    {[...Array(5)].map((_, i) =>
                      i < tour.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                    )}
                  </div>
                  <span className="text-sm text-gray-500">(2)</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  <a href="#" className="hover:text-blue-600 transition">{tour.title}</a>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Popular;
