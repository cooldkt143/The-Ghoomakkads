import React from "react";
import bgImg from "../assets/images/adventurebg.gif";
import bikingImg from "../assets/images/biking.jpg";
import trekkingImg from "../assets/images/trekking.jpg";
import stargazingImg from "../assets/images/Star gazzing.jpg";
import campingImg from "../assets/images/Camping.jpg";

const adventures = [
  {
    title: "Biking",
    description: "Feel the adrenaline as you cycle through rugged terrains and serene trails.",
    image: bikingImg,
    link: "https://www.bikersclub.in/",
  },
  {
    title: "Trekking",
    description: "Explore majestic mountains and verdant valleys on your trekking adventures.",
    image: trekkingImg,
    link: "https://www.trekupindia.com/",
  },
  {
    title: "Stargazing",
    description: "Defy gravity and test your limits as you scale rocky heights.",
    image: stargazingImg,
    link: "https://amateurastroclub.in/",
  },
  {
    title: "Camping",
    description: "Reconnect with nature under the open sky at picturesque camping sites.",
    image: campingImg,
    link: "https://www.campsvilla.com/",
  },
  {
    title: "Biking",
    description: "Feel the adrenaline as you cycle through rugged terrains and serene trails.",
    image: bikingImg,
    link: "https://www.bikersclub.in/",
  },
  {
    title: "Trekking",
    description: "Explore majestic mountains and verdant valleys on your trekking adventures.",
    image: trekkingImg,
    link: "https://www.trekupindia.com/",
  },
  {
    title: "Stargazing",
    description: "Defy gravity and test your limits as you scale rocky heights.",
    image: stargazingImg,
    link: "https://amateurastroclub.in/",
  },
  {
    title: "Camping",
    description: "Reconnect with nature under the open sky at picturesque camping sites.",
    image: campingImg,
    link: "https://www.campsvilla.com/",
  },
];

const AdventureHub = () => {
  return (
    <div className="bg-green-900 text-gray-800">
      <header
        className="fixed top-0 left-0 w-full text-center text-white py-20 px-4 bg-center bg-blend-overlay bg-black/50 z-50"
        style={{ backgroundImage: `url(${bgImg})`, height: "290px" }}
      >
        <h1 className="text-5xl font-bold">Adventure Hub</h1>
        <p className="text-xl mb-10 mt-2">
          Unleash your adventurous spirit with thrilling outdoor activities.
        </p>
      </header>

      {/* Push content below header height */}
      <main className="pt-[310px]">
        <section className="bg-green-900 w-full min-h-screen pb-32 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {adventures.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden text-center h-[400px] relative"
            >
              <img src={item.image} alt={item.title} className="w-full h-[55%] object-cover" />
              <h2 className="text-2xl lg:text-4xl mb-5 text-blue-600 font-semibold mt-4">{item.title}</h2>
              <p className="text-xl lg:text-2xl text-gray-600 px-4 pb-6">{item.description}</p>
            </a>
          ))}
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center py-4 text-sm z-50">
        <p>© The Ghoomakkads</p>
      </footer>
    </div>
  );
};

export default AdventureHub;
