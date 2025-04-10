import React, { useState, useEffect, useRef } from 'react';

import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline, timeOutline, star, starOutline } from 'ionicons/icons';
import { compass, briefcase, umbrella } from 'ionicons/icons';
import './App.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const scrollRef = useRef(null);
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

  const categories = [
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

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-no-repeat bg-center relative"
      >
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between relative">
          <div className="max-w-xl text-center lg:text-left z-2 py-20 px-0">
            <img src="/images/logo-ghoomakkads.png" className="w-24 h-24 mb-4 " />
            <p className=" text-yellow-600 font-['Brush_Script_MT',cursive] text-4xl mb-2">Save a Little, Travel a Lot – With Piggy Bank,</p>
            <h2 className="text-[1px] sm:text-5xl font-['Abril_Fatface'] font-bold text-gray-800 mb-4">Collect digital coins and turn small savings into big adventures!</h2>
            <p className="text-base px-2 py-3 sm:text-2xl text-gray-500 mb-6 font-medium">
              <b>
              a smart, effortless way to save for your next adventure.<br></br> 
              Buy digital coins worth 1 INR each, save small amounts regularly, and redeem them later for future trips. It’s the perfect tool to budget travel expenses and make your dream journeys a reality.
              </b>
            </p>
            <button
              
              className="text-white w-60 h-15 px-6 py-2 bg-gradient-to-b from-yellow-800 to-yellow-500 hover:text-2xl hover:text-white transition hover:w-60 h-15 px-6 py-2"
            >
              Pay now!
            </button>
          </div>

          <figure className="max-w-md w-full mb-10 lg:mb-0 z-10">
            <img
              src="/images/GhoomQr.png"
              width="686"
              height="812"
              alt="hero banner"
              loading="lazy"
              className="w-full object-cover"
            />
          </figure>
        </div>
      </section>

    </div>
  );
};

export default Home;
