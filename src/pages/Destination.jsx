import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo-ghoomakkads (2).png";
import profilePic from "../assets/images/host1.jpg";
import { IoMenuOutline } from "react-icons/io5";
import Body from "../components/Body";
import { useNavigate, useLocation } from "react-router-dom";

const Destination = () => {
  const [navActive, setNavActive] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleNav = () => setNavActive(!navActive);

  // Scroll detection for blur effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/" || location.pathname === "/home";
  const bgClass = isHome
    ? scrolled
      ? "backdrop-blur-xl bg-gray-700"
      : "bg-transparent"
    : "backdrop-blur-xl bg-gray-700/80";

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full py-2 z-50 transition-all duration-500 ${bgClass}`}
      >
        <div className="flex items-center justify-between w-full px-4 lg:px-10">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full p-2 flex items-center justify-center">
              <img
                src={logo}
                width="50"
                height="50"
                alt="Ghoomakkads Logo"
                className="rounded-full"
              />
            </div>
            <h1 className="text-lg sm:text-2xl font-bold text-white">
              Ghoomakkads
            </h1>
          </div>

          {/* Center: Nav Buttons */}
          <nav className="hidden sm:flex gap-4 justify-center flex-1 mx-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className="backdrop-blur-md bg-white/20 text-white px-4 py-2 rounded-md hover:bg-gray-900 active:bg-gray-800 transition"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right: Profile / Login / Signup */}
          <div className="flex items-center gap-2">
            {showProfile ? (
              <button
                onClick={() => navigate("/profile")}
                className="cursor-pointer"
              >
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
              </button>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="backdrop-blur-md bg-white/20 text-white px-4 py-2 rounded-md hover:bg-gray-900 active:bg-gray-800 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="backdrop-blur-md bg-white/20 text-white px-4 py-2 rounded-md hover:bg-gray-900 active:bg-gray-800 transition"
                >
                  Sign Up
                </button>
              </>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="sm:hidden text-white text-2xl p-2"
              aria-label="Toggle Menu"
              onClick={toggleNav}
            >
              <IoMenuOutline size={30} />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {navActive && (
          <div className="sm:hidden flex flex-col gap-2 w-full bg-gray-700/30 backdrop-blur-xl p-4 absolute top-full left-0 z-40">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.path);
                  setNavActive(false);
                }}
                className="text-white font-medium px-4 py-2 rounded-md backdrop-blur-xl bg-white/10 hover:bg-gray-900 transition w-full text-center"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Section */}
      <div className="pt-0">
        <Body />
      </div>
    </div>
  );
};

export default Destination;
