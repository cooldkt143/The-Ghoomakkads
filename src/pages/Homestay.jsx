// Homestay.jsx
import React, { useState } from "react";
import Header from "../components/Header"; // Make sure this path is correct

const Homestay = () => {
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [customText, setCustomText] = useState("");

  const states = ["Maharashtra", "Goa", "Kerala", "Rajasthan"];
  const cities = ["Mumbai", "Pune", "Panaji", "Alleppey", "Jaipur", "Jaisalmer"];

  const homestays = [
    {
      name: "Sea View Homestay",
      city: "Goa",
      state: "Goa",
      price: 120,
      review: 4.5,
      image:
        "https://images.unsplash.com/photo-1501117716987-c8d4f69e0f5a?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mountain Retreat",
      city: "Manali",
      state: "Himachal Pradesh",
      price: 90,
      review: 4.2,
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "City Comfort Stay",
      city: "Mumbai",
      state: "Maharashtra",
      price: 150,
      review: 3.8,
      image:
        "https://images.unsplash.com/photo-1560184897-1fa70e4cd18f?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Backwater Villa",
      city: "Alleppey",
      state: "Kerala",
      price: 180,
      review: 4.7,
      image:
        "https://images.unsplash.com/photo-1582719478171-82c0b9d5b4f3?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Desert Oasis Camp",
      city: "Jaisalmer",
      state: "Rajasthan",
      price: 110,
      review: 4.3,
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Tea Garden Cottage",
      city: "Darjeeling",
      state: "West Bengal",
      price: 95,
      review: 4.6,
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Lakeside Haven",
      city: "Udaipur",
      state: "Rajasthan",
      price: 160,
      review: 4.4,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Forest Edge Stay",
      city: "Coorg",
      state: "Karnataka",
      price: 100,
      review: 4.1,
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Royal Heritage Haveli",
      city: "Jaipur",
      state: "Rajasthan",
      price: 200,
      review: 4.8,
      image:
        "https://images.unsplash.com/photo-1535556116002-6281ff3e9f13?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Riverside Bliss",
      city: "Rishikesh",
      state: "Uttarakhand",
      price: 130,
      review: 4.5,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Hilltop Escape",
      city: "Shillong",
      state: "Meghalaya",
      price: 140,
      review: 4.2,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Houseboat Serenity",
      city: "Srinagar",
      state: "Jammu & Kashmir",
      price: 170,
      review: 4.6,
      image:
        "https://images.unsplash.com/photo-1606741965912-9b66f9c73f1a?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Eco Jungle Stay",
      city: "Kaziranga",
      state: "Assam",
      price: 85,
      review: 4.0,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Beachside Paradise",
      city: "Pondicherry",
      state: "Puducherry",
      price: 155,
      review: 4.7,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Valley View Lodge",
      city: "Leh",
      state: "Ladakh",
      price: 175,
      review: 4.6,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const filteredHomestays = homestays.filter((h) => {
    const matchesSearch = h.name.toLowerCase().includes(search.toLowerCase());
    const matchesState = stateFilter ? h.state === stateFilter : true;
    const matchesCity = cityFilter ? h.city === cityFilter : true;
    const matchesPrice =
      (minPrice ? h.price >= parseInt(minPrice) : true) &&
      (maxPrice ? h.price <= parseInt(maxPrice) : true);
    const matchesRating = ratingFilter ? Math.floor(h.review) === parseInt(ratingFilter) : true;

    return matchesSearch && matchesState && matchesCity && matchesPrice && matchesRating;
  });

  const handleSend = () => {
    if (customText.trim()) {
      alert(`You entered: ${customText}`);
      setCustomText("");
    }
  };

  return (
    <div className="relative pt-20 bg-[#446a6c] min-h-screen">
      {/* Header */}
      <Header />

      <div className="w-full p-4 pb-24 max-w-7xl mx-auto h-[calc(100vh-80px)]">
        {/* Search Bar */}
        <div className="bg-white p-6 rounded-3xl shadow-lg mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Find Your Perfect Homestay
          </h1>
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
                <option key={idx} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select City</option>
              {cities.map((city, idx) => (
                <option key={idx} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-[calc(100%-140px)]">
          {/* Left Column (Filters, fixed height) */}
          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6 md:col-span-1 h-full overflow-y-auto">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Filters</h2>

            {/* Price Range */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Price Range</h4>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-1/2 p-2 border rounded-lg"
                />
                <span className="text-gray-600">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-1/2 p-2 border rounded-lg"
                />
              </div>
            </div>

            {/* Rating */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Rating</h4>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label
                    key={star}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="rating"
                      value={star}
                      checked={ratingFilter === String(star)}
                      onChange={(e) => setRatingFilter(e.target.value)}
                      className="form-radio text-yellow-500"
                    />
                    <span>{star} Star</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Custom Filter</h4>
              <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                <input
                  type="text"
                  placeholder="Enter text..."
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="flex-1 p-0 border rounded-lg"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (Scrollable Homestay Cards) */}
          <div className="md:col-span-3 h-100 overflow-y-auto scrollbar-hide pr-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHomestays.map((h, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer"
                >
                  <img
                    src={h.image}
                    alt={h.name}
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800">{h.name}</h2>
                    <p className="text-gray-600 mt-1">{h.city}, {h.state}</p>
                    <p className="text-green-600 font-semibold mt-2">${h.price} / night</p>
                    <p className="text-yellow-500 mt-1">⭐ {h.review} / 5</p>
                    <button className="mt-3 w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
              {filteredHomestays.length === 0 && (
                <p className="col-span-full text-center text-gray-500">
                  No homestays found matching your filters.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homestay;
