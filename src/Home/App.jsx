import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline, timeOutline, star, starOutline } from 'ionicons/icons';
import { compass, briefcase, umbrella } from 'ionicons/icons';
import './App.css';

const Home = () => {
  const [navActive, setNavActive] = useState(false);
  const [showProfile, setShowProfile] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const goTopBtn = document.querySelector('[data-go-top]');
      if (goTopBtn) {
        window.scrollY >= 500
          ? goTopBtn.classList.add('active')
          : goTopBtn.classList.remove('active');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const navigateTo = (page) => {
    window.location.href = page;
  };

  const openRegister = () => {
    window.location.href = 'register.html';
  };

  const destinations = [
    {
      img: '/images/frndsindex.jpg',
      alt: 'Malé, Maldives',
      subtitle: 'Travel With',
      title: 'Communities',
    },
    {
      img: '/images/Hands.gif',
      alt: 'Bangkok, Thailand',
      subtitle: 'Pin Your',
      title: 'Travel',
    },
    {
      img: '/images/moneygif.gif',
      alt: 'Kuala Lumpur, Malaysia',
      subtitle: 'Save For Your',
      title: 'Upcoming Trips',
    },
    {
      img: '/images/religious attraction.jpg',
      alt: 'Kathmandu, Nepal',
      subtitle: 'Explore',
      title: 'Undiscovered Places',
    },
    {
      img: '/images/Charm of a Chat.gif',
      alt: 'Jakarta, Indonesia',
      subtitle: 'Gossip with your',
      title: 'Travel Buddies',
    },
  ];

  const popularTours = [
    {
      image: '/images/sunset in mountains.jpg',
      title: 'Solo? they say "manzilon ki kya khabar, jab raahon se ishq ho"',
      duration: '12 Days',
      rating: 4,
    },
    {
      image: '/images/sunset.jpg',
      title: 'Outing With Friends/ Family? they say "Hum saath saath hain"',
      duration: '12 Days',
      rating: 4,
    },
    {
      image: '/images/rajasthan India.jpg',
      title: 'Need a Suspense Trip? they say "yeh sham, tum aur ankahi dastan"',
      duration: '12 Days',
      rating: 4,
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full bg-rose-400 shadow-md z-50 ${navActive ? 'bg-gray-100' : ''}`}>
        <div className="container mx-auto px-0 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/images/logo-ghoomakkads (2).png" width="75" height="75" alt="Ghoomakkads Logo" />
            <h1 className="text-2xl text-left font-bold text-white hidden sm:block">Ghoomakkads</h1>
          </div>

          <button className="sm:hidden text-2xl text-white" aria-label="Toggle Menu" onClick={toggleNav}>
            <IonIcon icon={navActive ? closeOutline : menuOutline} />
          </button>

          <nav className={`sm:flex flex-col sm:flex-row gap-6 sm:items-center absolute sm:static top-full left-0 w-full sm:w-auto bg-white sm:bg-transparent p-4 sm:p-0 transition-all duration-300 ease-in ${navActive ? 'block' : 'hidden'}`}>
            <a href='#' className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer">Home</a>
            <a onClick={() => navigateTo('AboutUs.html')} className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer">About Us</a>
            <a onClick={() => navigateTo('Tour.html')} className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer">Tours</a>
            <a onClick={() => navigateTo('Destination.html')} className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer">Destinations</a>
            <a onClick={() => navigateTo('ContactUs.html')} className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer">Contact Us</a>
            <a onClick={() => navigateTo('AdventureHub.html')} className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer">Adventure Hub</a>

            {showProfile ? (
              <a onClick={() => navigateTo('Profile.html')} className="cursor-pointer">
                <img src="/images/host1.jpg" alt="Profile" width="40" height="40" className="rounded-full" />
              </a>
            ) : (
              <>
                <a onClick={() => navigateTo('SignIn.html')} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Login</a>
                <a onClick={() => navigateTo('SignUp.html')} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Sign Up</a>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="pt-28 pb-20 bg-cover bg-no-repeat bg-center relative"
        // style={{
        //   backgroundImage: url('hero-bg-top.png'), url('hero-bg-bottom.png'),
        //   backgroundBlendMode: 'overlay',
        // }}
      >
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between relative">
          <div className="max-w-xl text-center lg:text-left z-2 py-20 px-0">
            <p className=" text-yellow-600 font-['Brush_Script_MT',cursive] text-4xl mb-2">Aao Ghoomne Chaleen</p>
            <h2 className="text-[1px] sm:text-7xl font-['Abril_Fatface'] font-bold text-gray-800 mb-4">The Ghoomakkads</h2>
            <p className="text-base px-2 py-3 sm:text-2xl text-gray-500 mb-6 font-medium">
              <b>
                You tired of dull trips?<br />
                We have something exciting just for you!<br />
                We organize surprise trips where the destination remains a thrilling mystery until the last moment.<br />
                We'll put together a group of verified travelers who share similar travel styles to enhance your experience.
              </b>
            </p>
            <button
              onClick={openRegister}
              className="text-white w-60 h-15 px-6 py-2 bg-rose-400 hover:bg-rose-500 hover:text-white transition hover:w-60 h-15 px-6 py-2"
            >
              Register Now!
            </button>
          </div>

          <figure className="max-w-md w-full mb-10 lg:mb-0 z-10">
            <img
              src="/images/edit1.jpg"
              width="686"
              height="812"
              alt="hero banner"
              loading="lazy"
              className="w-full object-cover"
            />
          </figure>
        </div>
      </section>

      {/* Destination Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center font-bold text-[50px] font-['Abril_Fatface'] text-gray-500 mb-2">Features that We Offer</p>
          <h2 className="text-6xl font-['Brush_Script_MT',cursive] text-center text-rose-500 mb-12">Explore!!!!</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <li key={index} className="w-full">
                <a href="#" className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                  <figure className="aspect-[4/3] overflow-hidden">
                    <img src={dest.img} alt={dest.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                  </figure>
                  <div className="p-4 bg-white">
                    <p className="text-sm text-gray-500">{dest.subtitle}</p>
                    <h3 className="text-xl font-semibold text-gray-800">{dest.title}</h3>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-[50px] text-center  text-rose-500 font-['Brush_Script_MT',cursive] mb-2 font-medium">Featured Tours</p>
          <h2 className="text-6xl text-center font-bold font-['Abril_Fatface'] mb-10 text-gray-500">Most Popular Tours</h2>

          <ul className="grid md:grid-cols-3 gap-8">
            {popularTours.map((tour, index) => (
              <li key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                  <a href="#">
                    <img src={tour.image} alt={tour.title} className="w-full h-64 object-cover" />
                  </a>
                  <span className="absolute top-3 left-3 bg-rose-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <IonIcon icon={timeOutline} />
                    <time>{tour.duration}</time>
                  </span>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex text-yellow-400 text-xl">
                      {[...Array(5)].map((_, i) => (
                        <IonIcon key={i} icon={i < tour.rating ? star : starOutline} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">(2)</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    <a href="#" className="hover:text-blue-600 transition">
                      {tour.title}
                    </a>
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Text Content */}
          <div className="lg:w-1/2">
            <p className="text-6xl font-['Brush_Script_MT',cursive] text-left text-rose-500 font-medium mb-2">Out of Money!!!</p>
            <h2 className="text-4xl text-left font-['Abril_Fatface'] font-bold text-gray-800 mb-6">
              Explore all tour of the world with us.
            </h2>
            <p className="text-[20px] text-left text-gray-600 mb-8">
              Budget is an essential aspect of any journey, and we're here to
              empower users to save money by providing our budget-friendly
              options and an innovative digital saving feature.
            </p>

            {/* Features List */}
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="text-2xl text-rose-500 mt-1">
                  <IonIcon icon={compass} />
                </div>
                <div>
                  <h3 className="text-4xl text-left font-semibold text-gray-700 mb-1">Money guide</h3>
                  <p className="text-left text-[20px] text-gray-600">
                    We encourage our users to save minimal money at regular intervals
                    which can be retrieved later and used for their next trips.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="text-2xl text-rose-500 mt-1">
                  <IonIcon icon={briefcase} />
                </div>
                <div>
                  <h3 className="text-4xl text-left font-semibold text-gray-700 mb-1">Friendly price</h3>
                  <p className="text-left text-[20px] text-gray-600">
                    By purchasing 1 digital coin which will be equivalent to 1 INR.
                    You may access this anytime you want during your journey/ your future trips.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="text-2xl text-rose-500 mt-1">
                  <IonIcon icon={umbrella} />
                </div>
                <div>
                  <h3 className="text-4xl text-left font-semibold text-gray-700 mb-1">When to Save?</h3>
                  <p className="text-left text-[20px] text-gray-600">
                    The time when you're at your home (when not travelling), you may save a little amount.
                    This saving approach will prevent them from reconsidering their budget while planning their trips.
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="PiggyBank.html"
              className="inline-block-left text-3xl text-left mt-8 bg-rose-400 text-white w-65 h-15 px-7 py-2 rounded-full hover:bg-rose-500 transition"
            >
              SaveNow!
            </a>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <img
              src="/images/7 Things Frequent Travelers Do to Save Money for Vacations.jpg"
              alt="Saving for Travel"
              className="rounded-xl text-right shadow-lg w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

            
      {/* <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center py-4 text-xl z-50">
        <p>© The Ghoomakkads</p>
      </footer> */}
    </div>
  );
};

export default Home;
