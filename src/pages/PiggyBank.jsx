import React, { useState, useEffect, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline, timeOutline, star, starOutline } from 'ionicons/icons';
import { compass, briefcase, umbrella } from 'ionicons/icons';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images from ../assets/images
import logoImg from '../assets/images/logo-ghoomakkads.png';
import heroBanner from '../assets/images/GhoomQr.png';
import frndsIndex from '../assets/images/frndsindex.jpg';
import handsGif from '../assets/images/Hands.gif';
import moneyGif from '../assets/images/moneygif.gif';
import religiousAttraction from '../assets/images/religious attraction.jpg';
import chatGif from '../assets/images/Charm of a Chat.gif';
import sunsetMountains from '../assets/images/sunset in mountains.jpg';
import sunset from '../assets/images/sunset.jpg';
import rajasthan from '../assets/images/rajasthan India.jpg';

const Piggy = () => {
  const [goalAmount, setGoalAmount] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    const goal = parseFloat(goalAmount);
    const savings = parseFloat(currentSavings);
    if (!isNaN(goal) && !isNaN(savings) && goal > 0) {
      setProgress(Math.min((savings / goal) * 100, 100));
    }
  };

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

  const toggleNav = () => setNavActive(!navActive);
  const navigateTo = (page) => (window.location.href = page);
  const openRegister = () => (window.location.href = 'register.html');

  const categories = [
    { img: frndsIndex, alt: 'Malé, Maldives', subtitle: 'Travel With', title: 'Communities' },
    { img: handsGif, alt: 'Bangkok, Thailand', subtitle: 'Pin Your', title: 'Travel' },
    { img: moneyGif, alt: 'Kuala Lumpur, Malaysia', subtitle: 'Save For Your', title: 'Upcoming Trips' },
    { img: religiousAttraction, alt: 'Kathmandu, Nepal', subtitle: 'Explore', title: 'Undiscovered Places' },
    { img: chatGif, alt: 'Jakarta, Indonesia', subtitle: 'Gossip with your', title: 'Travel Buddies' },
  ];

  const popularTours = [
    { image: sunsetMountains, title: 'Solo? they say "manzilon ki kya khabar, jab raahon se ishq ho"', duration: '12 Days', rating: 4 },
    { image: sunset, title: 'Outing With Friends/ Family? they say "Hum saath saath hain"', duration: '12 Days', rating: 4 },
    { image: rajasthan, title: 'Need a Suspense Trip? they say "yeh sham, tum aur ankahi dastan"', duration: '12 Days', rating: 4 },
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
      <section className="bg-cover bg-no-repeat bg-center relative">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between relative">
          <div className="max-w-xl text-center lg:text-left z-2 py-20 px-0">
            <img src={logoImg} className="w-24 h-24 mb-4" alt="Ghoomakkads Logo" />
            <p className="text-yellow-600 font-['Brush_Script_MT',cursive] text-4xl mb-2">
              Save a Little, Travel a Lot – With Piggy Bank,
            </p>
            <h2 className="text-[1px] sm:text-5xl font-['Abril_Fatface'] font-bold text-gray-800 mb-4">
              Collect digital coins and turn small savings into big adventures!
            </h2>
            <p className="text-base px-2 py-3 sm:text-2xl text-gray-500 mb-6 font-medium">
              <b>
                a smart, effortless way to save for your next adventure.<br />
                Buy digital coins worth 1 INR each, save small amounts regularly, and redeem them later for future trips. It’s the perfect tool to budget travel expenses and make your dream journeys a reality.
              </b>
            </p>
            <button className="text-white w-60 h-15 px-6 py-2 bg-gradient-to-b from-yellow-800 to-yellow-500 hover:text-2xl hover:text-white transition hover:w-60 h-15 px-6 py-2">
              Pay now!
            </button>
          </div>

          <figure className="max-w-md w-full mb-10 lg:mb-0 z-10">
            <img src={heroBanner} width="686" height="812" alt="hero banner" loading="lazy" className="w-full object-cover" />
          </figure>
        </div>
      </section>

      {/* Piggy Bank Section */}
      <section id="piggy-bank" className="py-12 px-8 text-center">
        <div className="piggy-bank-content">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Your Saving : </h1>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">🪙🪙🪙🪙</h1>
          <p className="text-lg text-gray-600 mb-8">
            Save for your dream destination! Set a savings goal and track your progress toward making unforgettable memories.
          </p>

          {/* Savings Goal Form */}
          <div className="bg-gray-100 p-6 rounded-xl mb-8 shadow-lg max-w-[650px] mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Set Your Savings Goal</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="goal-amount" className="block text-2xl text-gray-600 mb-2">Savings Goal:</label>
              <input
                type="number"
                id="goal-amount"
                value={goalAmount}
                onChange={(e) => setGoalAmount(e.target.value)}
                placeholder="Enter your goal amount"
                required
                className="w-full p-3 text-xl mb-4 rounded border border-gray-300"
              />

              <label htmlFor="current-savings" className="block text-2xl text-gray-600 mb-2">Current Savings:</label>
              <input
                type="number"
                id="current-savings"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(e.target.value)}
                placeholder="Enter current savings"
                required
                className="w-full p-3 text-xl mb-4 rounded border border-gray-300"
              />

              <button
                type="button"
                onClick={updateProgress}
                className="bg-yellow-500 text-2xl text-gray-900 font-bold py-2 px-6 rounded hover:text-gray-900 hover:bg-yellow-600 hover:text-2xl hover:rounded"
              >
                Save Goal
              </button>
            </form>
          </div>

          {/* Progress Display */}
          <div className="max-w-lg mx-auto mb-8">
            <h2 className="text-2xl font-semibold mb-4">Savings Progress</h2>
            <div className="bg-white h-8 rounded-full overflow-hidden mb-2 border">
              <div className="bg-orange-400 text-2xl h-full transition-all duration-500 rounded-l-full" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-lg text-gray-800">{Math.round(progress)}% Complete</p>
          </div>

          {/* Inspirational Message */}
          <div className="italic text-2xl text-gray-600 mt-6">
            <p>"The journey of a thousand miles begins with a single step"</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Piggy;
