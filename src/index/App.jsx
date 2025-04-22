import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import bgImg from "../assets/homebg.jpg";
import aroplaneImg from "../assets/Airplane.png";
import logoImg from "../assets/logo-ghoomakkads.png";
import Home from "../Home/App";
import AboutUs from "../About/App";
import AdventureHub from "../AdventureHub/App";
import Contact from "../Contact/App";
import Destination from "../Destination/App";
import Piggy from "../PiggyBank/App";
import ProfilePage from "../Profile/App";
import Register from "../Register/App";
import TourPage from "../Tour/App";
import TravelHostCommunity from "../TravelHostCommunity/App";

const Landing = () => {
  const navigate = useNavigate();  // <-- useNavigate hook

  const openHome = () => {
    navigate("/home");  // <-- navigate to /home route
  };

  return (
    <div className="font-[Poppins] text-gray-700 bg-gray-100">

      {/* Hero Section */}
      <section className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-5" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="mt-20 max-w-lg text-gray-800">
          <img src={logoImg} alt="Logo" className="w-24 h-24 mb-4 mx-auto" />
          <h1 className="text-3xl lg:text-4xl text-red-500 font-bold mb-4">The Ghoomakkads</h1>
          <h2 className="text-xl lg:text-2xl text-red-500 mb-4">Discover new horizons and unforgettable adventures</h2>
          <p className="text-base lg:text-lg mb-6">Explore charming places and magical adventures tailored just for you!</p>
          <button onClick={openHome} className="w-54 text-base lg:text-2xl h-15 px-6 py-2 bg-red-500 text-white font-semibold hover:bg-red-600 transition">
            Let's Go!
          </button>
        </div>
        <img src={aroplaneImg} alt="Airplane" className="absolute right-10 top-2 w-80 animate-fly" />
      </section>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes fly {
          0% { transform: translateX(100px) rotate(-10deg); }
          100% { transform: translateX(-100vw) rotate(-10deg); }
        }
        .animate-fly { animation: fly 10s linear infinite; }
      `}</style>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter basename="/The-Ghoomakkads"> {/* add correct repo name */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/AdventureHub" element={<AdventureHub />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Piggy" element={<Piggy />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/TourPage" element={<TourPage />} />
        <Route path="/TravelHostCommunity" element={<TravelHostCommunity />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
