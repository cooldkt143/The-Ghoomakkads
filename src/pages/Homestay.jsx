// Homestay.jsx
import React, { useState } from "react";
import Header from "../components/Header"; // Make sure this path is correct

const Homestay = () => {
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Sample data for states, cities, price ranges
  const states = ["Maharashtra", "Goa", "Kerala", "Rajasthan"];
  const cities = ["Mumbai", "Pune", "Panaji", "Alleppey", "Jaipur", "Jaisalmer"];
  const priceRanges = ["< $50", "$50 - $100", "$100 - $200", "$200+"];

  // Sample home stay data
  const homestays = [
    {
      name: "Sea View Homestay",
      city: "Goa",
      state: "Goa",
      price: 120,
      image: "https://images.unsplash.com/photo-1501117716987-c8d4f69e0f5a?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mountain Retreat",
      city: "Manali",
      state: "Himachal Pradesh",
      price: 90,
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "City Comfort Stay",
      city: "Mumbai",
      state: "Maharashtra",
      price: 150,
      image: "https://images.unsplash.com/photo-1560184897-1fa70e4cd18f?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Backwater Villa",
      city: "Alleppey",
      state: "Kerala",
      price: 180,
      image: "https://images.unsplash.com/photo-1582719478171-82c0b9d5b4f3?auto=format&fit=crop&w=400&q=80",
    },
  ];

  // Filtered home stays based on search & filters
  const filteredHomestays = homestays.filter((h) => {
    const matchesSearch = h.name.toLowerCase().includes(search.toLowerCase());
    const matchesState = stateFilter ? h.state === stateFilter : true;
    const matchesCity = cityFilter ? h.city === cityFilter : true;
    const matchesPrice =
      priceRange === "< $50"
        ? h.price < 50
        : priceRange === "$50 - $100"
        ? h.price >= 50 && h.price <= 100
        : priceRange === "$100 - $200"
        ? h.price > 100 && h.price <= 200
        : priceRange === "$200+"
        ? h.price > 200
        : true;

    return matchesSearch && matchesState && matchesCity && matchesPrice;
  });

  return (
    <div className="relative pt-20 bg-[#446a6c] min-h-screen">
      {/* Header */}
      <Header />

      <div className="w-full p-4 space-y-12 pb-24 max-w-7xl mx-auto">
        {/* Search & Filters */}
        <div className="bg-white p-6 rounded-3xl shadow-lg mb-8 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Find Your Perfect Homestay</h1>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="Search homestays..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select State</option>
              {states.map((state, idx) => (
                <option key={idx} value={state}>{state}</option>
              ))}
            </select>
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select City</option>
              {cities.map((city, idx) => (
                <option key={idx} value={city}>{city}</option>
              ))}
            </select>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Price Range</option>
              {priceRanges.map((range, idx) => (
                <option key={idx} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Homestay Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHomestays.map((h, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer"
            >
              <img
                src={h.image}
                alt={h.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{h.name}</h2>
                <p className="text-gray-600 mt-1">{h.city}, {h.state}</p>
                <p className="text-green-600 font-semibold mt-2">${h.price} / night</p>
                <button className="mt-3 w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
          {filteredHomestays.length === 0 && (
            <p className="col-span-full text-center text-gray-500">No homestays found matching your filters.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center py-4 text-sm z-50">
        <p>© The Ghoomakkads</p>
      </footer>
    </div>
  );
};

export default Homestay;
