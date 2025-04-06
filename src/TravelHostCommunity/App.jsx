import React from "react";

const hosts = [
  {
    name: "Tejaswini Sabat",
    location: "Madhya Pradesh, India",
    specialty: "Group Tours & Solo Experiences",
    image: "/images/host1.jpg",
  },
  {
    name: "Ridesh Sharma",
    location: "Gangtok, Shillong",
    specialty: "Trekking & Food Tastings",
    image: "/images/host2.jpg",
  },
  {
    name: "Aisha Khan",
    location: "Pathankot, Punjab",
    specialty: "Desert Excursions & Adventure",
    image: "/images/host3.jpg",
  },
  {
    name: "Jimmy Shergill",
    location: "Nanitaal, Uttrakhand",
    specialty: "Adventure Tours & Mountain Stargazing",
    image: "/images/host4.jpg",
  },
];

function TravelHostCommunity() {
  return (
    <div className="text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#c96868] shadow-md px-10 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/images/logo-ghoomakkads sign in.png" alt="Logo" className="w-12 h-14" />
          <span className="text-white text-xl font-bold">Ghoomakkads</span>
        </div>
        <div className="flex gap-6 text-white text-xl">
          <a onClick={() => navigateTo('tourpage.html')} className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer">Tours</a>
          <a onClick={() => navigateTo('destination.html')} className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer">Destinations</a>
          <a onClick={() => navigateTo('ContactUs.html')} className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer">Contact Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-8 text-white mt-20"
        style={{ backgroundImage: "url('/images/tcbg.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Meet Our Travel Hosts</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Connect with trusted local hosts to make your travel experience unforgettable.
        </p>
      </section>

      {/* Hosts Section */}
      <section className="bg-[#f38f8f] py-12 px-6 text-center mb-7 mt-[-4px]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Featured Hosts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hosts.map((host, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <img src={host.image} alt={host.name} className="w-full h-52 object-cover" />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-1">{host.name}</h3>
                <p className="text-xl text-gray-600 mb-1">Location: {host.location}</p>
                <p className="text-xl text-gray-600 mb-3">Specialty: {host.specialty}</p>
                <button className=" text-xl bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded font-bold hover:px-4 py-2 hover:rounded-lg transition duration-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-[#222] text-xl text-white text-center py-4">
        <p>&copy; The Ghoomakkads</p>
      </footer>
    </div>
  );
}

export default TravelHostCommunity;
