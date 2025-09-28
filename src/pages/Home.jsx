import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import Explore from '../components/Explore';
import Popular from '../components/Popular';
import Piggy from '../components/Piggy';
import Footer from '../components/Footer';

// Import category images
import communitiesImg from '../assets/images/communities.jpg';
import handsImg from '../assets/images/Hands.gif';
import moneyGif from '../assets/images/moneygif.gif';
import religiousImg from '../assets/images/religious attraction.jpg';
import chatImg from '../assets/images/Charm of a Chat.gif';

const categories = [
  { img: communitiesImg, alt: 'Malé, Maldives', subtitle: 'Travel With', title: 'Communities' },
  { img: handsImg, alt: 'Bangkok, Thailand', subtitle: 'Pin Your', title: 'Travel' },
  { img: moneyGif, alt: 'Kuala Lumpur, Malaysia', subtitle: 'Save For Your', title: 'Upcoming Trips' },
  { img: religiousImg, alt: 'Kathmandu, Nepal', subtitle: 'Explore', title: 'Undiscovered Places' },
  { img: chatImg, alt: 'Jakarta, Indonesia', subtitle: 'Gossip with your', title: 'Travel Buddies' },
];

const popularTours = [
  { image: 'src/assets/images/sunset in mountains.jpg', title: 'Solo? they say "manzilon ki kya khabar, jab raahon se ishq ho"', duration: '12 Days', rating: 4 },
  { image: 'src/assets/images/sunset.jpg', title: 'Outing With Friends/ Family? they say "Hum saath saath hain"', duration: '12 Days', rating: 4 },
  { image: 'src/assets/images/rajasthan India.jpg', title: 'Need a Suspense Trip? they say "yeh sham, tum aur ankahi dastan"', duration: '12 Days', rating: 4 },
];

const Home = () => {
  const location = useLocation();

  return (
    <div className="top-0 left-0 w-full min-h-screen">
      {/* Pass the current location to Header for blur logic */}
      <Header currentPath={location.pathname} />
      <Main />
      <Explore categories={categories} />
      <Popular popularTours={popularTours} />
      <Piggy />
      <Footer />
    </div>
  );
};

export default Home;
