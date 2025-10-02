import React from 'react';
import Hero from '../components/Hero';
import PiggyBank from '../components/PiggyBank';
import Header from '../components/Header';

const Piggy = () => {
  return (
    <div id="piggybank">
      <Header />
      <Hero />
      <PiggyBank />
    </div>
  );
};

export default Piggy;
