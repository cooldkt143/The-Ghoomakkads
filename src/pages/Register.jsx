import React from 'react';
import bgImg from "../assets/images/registerBg.gif";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const attractions = [
    "Beach", "Mountains", "Waterfall", "Nature & Wildlife",
    "Historical Attractions", "Religious Attractions",
    "Entertainment & Sports", "Art & Theatre"
  ];

  const seasons = ["Spring", "Summer", "Autumn", "Winter"];
  const enjoyOptions = ["Relaxation", "Adventure", "Culture"];

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center bg-fixed flex justify-center items-center p-1 scrollbar-hide scroll-smooth"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="w-full max-w-5xl flex flex-col justify-center items-center text-center backdrop-blur-sm bg-black/10 rounded-xl p-1">
        <h1 className="font-serif text-white text-2xl lg:text-[28px] mb-5">Travel Preferences Form</h1>

        <form onSubmit={(e) => e.preventDefault()}>

          {/* Attractions Section */}
          <section className="mb-5">
            <h2 className="text-[#e1d4ee] text-sm lg:text-[20px] font-serif mb-3">Attractions</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {attractions.map((label, i) => (
                <label
                  key={i}
                  className="text-sm lg:text-xl bg-gray-200 px-3 py-2 rounded-full font-bold flex items-center cursor-pointer 
                  transition-all duration-300 hover:bg-sky-200 hover:scale-105"
                >
                  <input
                    type="checkbox"
                    name="attractions"
                    value={label.toLowerCase().replace(/\s+/g, '-')}
                    className="mr-2 scale-125 accent-[#4b5c9d]"
                  />
                  {label}
                </label>
              ))}
            </div>
          </section>

          {/* Seasons Section */}
          <section className="mb-5">
            <h2 className="text-[#e1d4ee] text-sm lg:text-[20px] font-serif mb-3">Seasons</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {seasons.map((season, i) => (
                <label
                  key={i}
                  className="text-sm lg:text-xl bg-gray-200 px-3 py-2 rounded-full font-bold flex items-center cursor-pointer 
                  transition-all duration-300 hover:bg-sky-200 hover:scale-105"
                >
                  <input
                    type="checkbox"
                    name="seasons"
                    value={season.toLowerCase()}
                    className="mr-2 scale-125 accent-[#4b5c9d]"
                  />
                  {season}
                </label>
              ))}
            </div>
          </section>

          {/* Enjoy Section */}
          <section className="">
            <h2 className="text-[#e1d4ee] text-sm lg:text-[20px] font-serif mb-3">How Do You Enjoy Yourself?</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {enjoyOptions.map((item, i) => (
                <label
                  key={i}
                  className="text-sm lg:text-xl bg-gray-200 px-3 py-2 rounded-full font-bold flex items-center cursor-pointer 
                  transition-all duration-300 hover:bg-sky-200 hover:scale-105"
                >
                  <input
                    type="checkbox"
                    name="enjoy"
                    value={item.toLowerCase()}
                    className="mr-2 scale-125 accent-[#4b5c9d]"
                  />
                  {item}
                </label>
              ))}
            </div>
          </section>

          {/* Submit Button */}
          <button
            type="button"
            onClick={() => navigate('/travelhostcommunity')}
            className="bg-[#6b4011] text-white px-6 py-3 rounded-full text-sm hover:tex-base lg:text-lg mt-5 
            transition-all duration-300 hover:bg-[#a2413e] hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
