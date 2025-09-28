import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Explore from '../components/Explore';
import Popular from '../components/Popular';
import Piggy from '../components/Piggy';

const categories = [
  { img: 'src/images/assets/frndsindex.jpg', alt: 'Malé, Maldives', subtitle: 'Travel With', title: 'Communities' },
  { img: 'src/images/assets/Hands.gif', alt: 'Bangkok, Thailand', subtitle: 'Pin Your', title: 'Travel' },
  { img: 'src/images/assets/moneygif.gif', alt: 'Kuala Lumpur, Malaysia', subtitle: 'Save For Your', title: 'Upcoming Trips' },
  { img: 'src/images/assets/religious attraction.jpg', alt: 'Kathmandu, Nepal', subtitle: 'Explore', title: 'Undiscovered Places' },
  { img: 'src/images/assets/Charm of a Chat.gif', alt: 'Jakarta, Indonesia', subtitle: 'Gossip with your', title: 'Travel Buddies' },
];

const popularTours = [
  { image: 'src/assets/images/sunset in mountains.jpg', title: 'Solo? they say "manzilon ki kya khabar, jab raahon se ishq ho"', duration: '12 Days', rating: 4 },
  { image: 'src/assets/images/sunset.jpg', title: 'Outing With Friends/ Family? they say "Hum saath saath hain"', duration: '12 Days', rating: 4 },
  { image: 'src/assets/images/rajasthan India.jpg', title: 'Need a Suspense Trip? they say "yeh sham, tum aur ankahi dastan"', duration: '12 Days', rating: 4 },
];

const Home = () => {
  const openRegister = () => {
    window.location.href = 'register.html';
  };

  return (
    <div className="top-0 left-0 w-full min-h-screen">
      <Header />
      <Main />
      <Explore categories={categories} />
      <Popular popularTours={popularTours} />
      <Piggy />
    </div>
  );
};

export default Home;
