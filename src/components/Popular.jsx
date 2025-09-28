import React, { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Popular = ({ popularTours }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 sec
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % popularTours.length);
    }, 5000);
    return () => clearInterval(id);
  }, [popularTours.length]);

  return (
    <section className="bg-[#2e5254] min-h-[50vh] flex items-center py-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* -------- Left Text -------- */}
        <div className="lg:w-1/2 text-white space-y-4">
          <p className="text-xl lg:text-4xl font-['Brush_Script_MT',cursive] text-yellow-600 pt-5">
            Featured Tours
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold font-['Abril_Fatface'] text-white">
            Most Popular Tours
          </h2>
            <p className="text-base lg:text-lg text-gray-200">
              Discover a handpicked collection of journeys that promise unforgettable experiences for every kind of traveler. From serene landscapes and cultural excursions to thrilling adventures and hidden gems off the beaten path, each tour is thoughtfully designed to ignite curiosity and create lasting memories.
            </p>

            <p className="text-base lg:text-lg text-gray-200">
              We carefully select destinations that combine beauty, excitement, and authenticity, ensuring that every moment of your trip is meaningful and enjoyable. Whether you’re traveling solo, with friends, or with family, our curated experiences bring together like-minded explorers, providing opportunities to connect, share stories, and make every journey truly special.
            </p>

            <p className="text-base lg:text-lg text-gray-200">
              With a perfect balance of planned activities and moments for spontaneous discovery, these tours allow you to fully immerse yourself in local cultures, flavors, and traditions while creating memories that you’ll cherish forever.
            </p>
        </div>

        {/* -------- Right White Box -------- */}
        <div className="lg:w-1/2">
          <div className="relative w-[350px] sm:w-[400px] md:w-[450px] lg:w-[700px] aspect-[4/3] bg-white rounded-2xl shadow-xl overflow-hidden mx-auto">
            {popularTours.map((tour, i) => (
              <div
                key={i}
                className={`absolute inset-0 p-4 transition-all duration-700 ease-in-out ${
                  i === currentIndex
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 z-0"
                }`}
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-2/3 object-cover"
                />

                {/* --- Tour Info --- */}
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, star) =>
                        star < tour.rating ? (
                          <FaStar key={star} />
                        ) : (
                          <FaRegStar key={star} />
                        )
                      )}
                    </div>
                    <span className="text-gray-500 text-sm">(2)</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800">
                    {tour.title}
                  </h3>
                  <span className="text-gray-500 text-sm">{tour.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
