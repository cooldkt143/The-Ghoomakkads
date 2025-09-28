// LiveTrips.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pastTripsData = [
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Sunset at the Beach",
    location: "Goa",
  },
  {
    image: "https://images.unsplash.com/photo-1549887534-21879f4b8ff4?auto=format&fit=crop&w=800&q=80",
    title: "Snowy Mountain Peaks",
    location: "Manali",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "City Lights at Night",
    location: "Mumbai",
  },
];

const liveTripsData = [
  {
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=400&q=80",
    title: "Himalayas Adventure",
    place: "Leh",
    travellers: 12,
    bookingLastDate: "2025-10-10",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Kerala Backwaters",
    place: "Alleppey",
    travellers: 8,
    bookingLastDate: "2025-10-15",
  },
  {
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=400&q=80",
    title: "Rajasthan Desert Trip",
    place: "Jaisalmer",
    travellers: 20,
    bookingLastDate: "2025-10-12",
  },
];

const LiveTrips = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === pastTripsData.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-4 space-y-12">
      {/* Past Trips Carousel */}
      <div className="relative w-full h-[40vh] overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 w-full h-full bg-center bg-cover flex items-end justify-start"
            style={{
              backgroundImage: `url(${pastTripsData[currentIndex].image})`,
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="relative z-10 p-6 text-white">
              <h2 className="text-2xl font-bold">{pastTripsData[currentIndex].title}</h2>
              <p className="text-sm mt-1">{pastTripsData[currentIndex].location}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Current Live Trips Grid */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Current Live Trips</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {liveTripsData.map((trip, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-80 object-cover"
              />
              {/* Info Overlay - always visible */}
              <div className="absolute bottom-0 w-full bg-black/60 text-white p-4">
                <h4 className="text-lg font-bold">{trip.title}</h4>
                <p className="text-sm">Place: {trip.place}</p>
                <p className="text-sm">Travellers: {trip.travellers}</p>
                <p className="text-xs text-green-400">Booking Last Date: {trip.bookingLastDate}</p>
                <button className="mt-2 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveTrips;
