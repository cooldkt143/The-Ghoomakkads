import { useEffect } from "react";
import bgImg from "../assets/homebg.jpg"
import aroplaneImg from "../assets/Airplane.png"
import logoImg from "../assets/logo-ghoomakkads.png"

const App = () => {
  const openHome = () => {
    window.location.href = "Home.html";
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
          <button onClick={openHome} className="w-54 text-base lg:text-2xl hover:text-base hover:lg:text-2xl h-15 px-6 py-2 bg-red-500 text-white font-semibold  hover:bg-red-600 transition">
            Let's Go!
          </button> 
        </div>
        {/* <img src="/images/Suitcase.png" alt="Suitcase" className="absolute left-5 bottom-5 w-64 animate-bounce" /> */}
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

export default App;
