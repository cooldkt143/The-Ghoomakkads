import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Heart as HeartIcon, ArrowRight } from "lucide-react";
import destinationsData from "../data/destinations.json"; 
import scrollCardData from "../data/scrollcard.json"; 

const Body = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [search, setSearch] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedDestinations, setLikedDestinations] = useState([]);
  const [likedCategories, setLikedCategories] = useState([]);
  const scrollInterval = useRef(null);

  // Load destinations from JSON
  useEffect(() => {
    setDestinations(destinationsData);
  }, []);

  // Auto-scroll top banner
  useEffect(() => {
    scrollInterval.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === scrollCardData.length - 1 ? 0 : prev + 1
      );
    }, 5000); // 5 sec
    return () => clearInterval(scrollInterval.current);
  }, []);

  // Categories
  const categories = ["Mountains", "Lakes", "Beaches", "Picnic Spots"];

  // Filter destinations based on search
  const filteredDestinations = destinations.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  // Toggle heart for destinations
  const toggleDestinationLike = (index) => {
    setLikedDestinations((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  // Toggle heart for categories
  const toggleCategoryLike = (index) => {
    setLikedCategories((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="pt-20 px-0 sm:px-6 lg:px-0 xl:px-24 bg-gray-200 min-h-screen">
      {/* Top Auto-Scrollable Banner */}
      <div className="w-full mb-6">
        <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[350px] rounded-xl overflow-hidden">
          <img
            src={scrollCardData[currentIndex]?.img}
            alt={scrollCardData[currentIndex]?.alt || "banner"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
              {scrollCardData[currentIndex]?.title || "Explore the World"}
            </h2>
          </div>
        </div>
      </div>

      {/* Search + Categories */}
      <div className="flex items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search destinations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Categories
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Category List */}
      {showCategories && (
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((cat, index) => (
            <span
              key={index}
              className="relative px-4 py-2 bg-white shadow rounded-full text-gray-700 text-sm cursor-pointer hover:bg-blue-100"
            >
              {cat}
              {/* Heart button */}
              <button
                onClick={() => toggleCategoryLike(index)}
                className="absolute top-0 right-0 -mt-2 -mr-2 p-1 bg-white rounded-full shadow hover:bg-red-100"
              >
                <HeartIcon
                  className={`w-4 h-4 ${
                    likedCategories.includes(index) ? "text-red-500" : "text-gray-400"
                  }`}
                />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Destination Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDestinations.map((place, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={place.img}
              alt={place.alt}
              className="w-full h-48 object-cover"
              loading="lazy"
            />

            {/* Heart Button on top-right of card */}
            <button
              onClick={() => toggleDestinationLike(index)}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-red-100"
            >
              <HeartIcon
                className={`w-5 h-5 ${
                  likedDestinations.includes(index) ? "text-red-500" : "text-gray-400"
                }`}
              />
            </button>

            <div className="p-4">
              <p className="text-sm text-gray-500">{place.subtitle}</p>
              <h3 className="text-xl font-semibold text-gray-800">
                {place.title}
              </h3>

              {/* Read More link at bottom-right */}
              <div className="flex justify-end mt-2">
                <a
                  href={`/destination/${place.id || index}`}
                  className="flex items-center gap-1 text-blue-500 hover:underline"
                >
                  Read more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
