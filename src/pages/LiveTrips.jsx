// LiveTrips.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const pastTripsData = [
  {
    image: "/livetrips/l1.jpg",
    title: "Sunset at the Beach",
    location: "Goa",
  },
  {
    image: "/livetrips/l2.jpg",
    title: "Snowy Mountain Peaks",
    location: "Manali",
  },
  {
    image: "/livetrips/l3.jpg",
    title: "City Lights at Night",
    location: "Mumbai",
  },
];

const liveTripsData = [
  {
    image: "/livetrips/lt1.jpg",
    title: "Meghalaya Living Roots Trek",
    place: "Shillong",
    travellers: 10,
    bookingLastDate: "2025-11-05",
  },
  {
    image: "/livetrips/lt2.jpg",
    title: "Ladakh Valley Expedition",
    place: "Leh",
    travellers: 15,
    bookingLastDate: "2025-11-12",
  },
  {
    image: "/livetrips/lt3.jpg",
    title: "Rishikesh Adventure Camp",
    place: "Rishikesh",
    travellers: 12,
    bookingLastDate: "2025-11-20",
  },
];

// 🆕 Upcoming Trips Data
const upcomingTripsData = [
  {
    image: "/livetrips/up1.jpg",
    title: "Darjeeling Tea Garden Hike",
    place: "Darjeeling",
    travellers: 9,
    bookingLastDate: "2025-12-05",
  },
  {
    image: "/livetrips/up2.jpg",
    title: "Goa Beach Carnival",
    place: "Goa",
    travellers: 25,
    bookingLastDate: "2025-12-15",
  },
  {
    image: "/livetrips/up3.jpg",
    title: "Pondicherry Coastal Getaway",
    place: "Pondicherry",
    travellers: 18,
    bookingLastDate: "2025-12-20",
  },
];

const LiveTrips = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === pastTripsData.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleViewDetails = (trip) => {
    navigate("/tripdetails", { state: { trip } });
  };

  return (
    <div className="relative pt-20 bg-[#446a6c]">
      <Header />

      <div className="w-full p-4 space-y-12 pb-24">
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
                <h2 className="text-2xl font-bold">
                  {pastTripsData[currentIndex].title}
                </h2>
                <p className="text-sm mt-1">
                  {pastTripsData[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Current Live Trips */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-4 p-1">
            Current Live Trips
          </h3>
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
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-4">
                  <h4 className="text-lg font-bold">{trip.title}</h4>
                  <p className="text-sm">Place: {trip.place}</p>
                  <p className="text-sm">Travellers: {trip.travellers}</p>
                  <p className="text-xs text-green-400">
                    Booking Last Date: {trip.bookingLastDate}
                  </p>
                  <button
                    className="mt-2 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
                    onClick={() => handleViewDetails(trip)}
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Trips */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-4 p-1">
            Upcoming Trips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingTripsData.map((trip, idx) => (
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
                <div className="absolute bottom-0 w-full bg-black/60 text-white p-4">
                  <h4 className="text-lg font-bold">{trip.title}</h4>
                  <p className="text-sm">Place: {trip.place}</p>
                  <p className="text-sm">Travellers: {trip.travellers}</p>
                  <p className="text-xs text-yellow-400">
                    Booking Last Date: {trip.bookingLastDate}
                  </p>
                  <button
                    className="mt-2 px-4 py-2 bg-green-600 rounded-lg text-white hover:bg-green-700 transition"
                    onClick={() => handleViewDetails(trip)}
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTrips;
