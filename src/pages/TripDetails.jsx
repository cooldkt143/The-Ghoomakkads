// TripDetails.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { FaPlane, FaHotel, FaUtensils, FaHiking } from "react-icons/fa";

const TripDetails = () => {
    const { state } = useLocation();
    const { trip } = state || {};

    if (!trip)
        return <p className="p-4 text-red-500 text-center">No trip data found!</p>;

    const host = {
        name: "Rohan Sharma",
        instagram: "@rohan_travels",
        image:
            "https://images.unsplash.com/photo-1603415526960-fb59f6c96a40?auto=format&fit=crop&w=400&q=80",
    };

    // Sample trip images for gallery
    const tripImages = [
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=400&q=80",
    ];

    const itinerary = [
        {
            day: "Day 1",
            title: "Arrival & Local Sightseeing",
            activities: [
                { icon: <FaPlane />, description: "Arrival at Leh airport" },
                { icon: <FaHotel />, description: "Check-in at hotel" },
                { icon: <FaHiking />, description: "Evening stroll around Leh local market" },
                { icon: <FaUtensils />, description: "Welcome dinner at hotel" },
            ],
            price: 100,
        },
        {
            day: "Day 2",
            title: "Hiking to Pangong Lake",
            activities: [
                { icon: <FaHiking />, description: "Early morning hike to Pangong Lake" },
                { icon: <FaUtensils />, description: "Packed lunch at lake" },
                { icon: <FaHotel />, description: "Return to hotel and rest" },
                { icon: <FaUtensils />, description: "Dinner at local restaurant" },
            ],
            price: 150,
        },
        {
            day: "Day 3",
            title: "Local Exploration & Departure",
            activities: [
                { icon: <FaHiking />, description: "Visit Shey Palace & Monastery" },
                { icon: <FaUtensils />, description: "Breakfast and check-out" },
                { icon: <FaPlane />, description: "Transfer to airport for departure" },
            ],
            price: 50,
        },
    ];

    const totalExpenditure = itinerary.reduce((acc, item) => acc + item.price, 0);
    const totalSeats = 20;
    const seatsLeft = totalSeats - trip.travellers;

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50 p-6">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:flex md:space-x-8">
                {/* Left Side: Trip Info */}
                <div className="md:w-2/3 space-y-6">
                    <h1 className="text-4xl font-extrabold text-gray-800">{trip.title}</h1>
                    <div className="grid grid-cols-2 gap-4 text-gray-700">
                        <p><span className="font-semibold">Place:</span> {trip.place}</p>
                        <p><span className="font-semibold">Start Date:</span> {trip.bookingLastDate}</p>
                        <p><span className="font-semibold">Registered Travellers:</span> {trip.travellers}</p>
                        <p><span className="font-semibold">Seats Left:</span> <span className="text-red-500 font-bold">{seatsLeft}</span></p>
                        <p><span className="font-semibold">Trip Budget:</span> <span className="text-green-600 font-bold">${totalExpenditure}</span></p>
                        <p><span className="font-semibold">Duration:</span> 3 Days</p>
                    </div>

                    {/* Detailed Itinerary */}
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Trip Itinerary</h2>
                        <ul className="space-y-4">
                            {itinerary.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow hover:shadow-lg transition"
                                >
                                    <p className="text-xl font-bold text-gray-700 mb-2">{item.day} - {item.title}</p>
                                    <ul className="space-y-1">
                                        {item.activities.map((act, i) => (
                                            <li key={i} className="flex items-center space-x-2 text-gray-600">
                                                <span className="text-blue-500">{act.icon}</span>
                                                <span>{act.description}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-green-600 font-semibold mt-2">Cost: ${item.price}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Book Now Button */}
                    <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition duration-300">
                        Book Now
                    </button>
                </div>

                {/* Right Side: Host Info + Trip Images */}
                <div className="md:w-1/3 mt-8 md:mt-0 flex flex-col items-center text-center">
                    <div className="relative w-36 h-36">
                        <img
                            src={host.image}
                            alt={host.name}
                            className="w-36 h-36 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                        />
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-gray-800">{host.name}</h3>
                    <a
                        href={`https://instagram.com/${host.instagram.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 px-4 py-1 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
                    >
                        {host.instagram}
                    </a>

                    {/* Trip Images Gallery */}
                    <div className="mt-6 w-full grid grid-cols-1 gap-4">
                        {tripImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Trip ${idx + 1}`}
                                className="w-full h-40 md:h-48 object-cover rounded-xl shadow-md hover:scale-105 transition transform"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripDetails;
