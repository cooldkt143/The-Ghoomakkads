import React, { useState } from 'react';

const PiggyBank = () => {
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

  return (
    <section
      id="piggy-bank"
      className="py-12 px-8 text-center bg-gradient-to-r from-[#292929] to-[#837450] text-white"
    >
      <div className="piggy-bank-content">
        <h1 className="text-4xl font-bold mb-4">Your Saving :</h1>
        <h1 className="text-3xl font-bold mb-4">🪙🪙🪙🪙</h1>
        <p className="text-lg mb-8 text-gray-200">
          Save for your dream destination! Set a savings goal and track your
          progress toward making unforgettable memories.
        </p>

        {/* Savings Goal Form */}
        <div className="bg-white/90 p-6 rounded-xl mb-8 shadow-lg max-w-[650px] mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Set Your Savings Goal
          </h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label
              htmlFor="goal-amount"
              className="block text-2xl text-gray-600 mb-2"
            >
              Savings Goal:
            </label>
            <input
              type="number"
              id="goal-amount"
              value={goalAmount}
              onChange={(e) => setGoalAmount(e.target.value)}
              placeholder="Enter your goal amount"
              required
              className="w-full p-3 text-xl text-black mb-4 rounded border border-gray-300"
            />

            <label
              htmlFor="current-savings"
              className="block text-2xl text-gray-600 mb-2"
            >
              Current Savings:
            </label>
            <input
              type="number"
              id="current-savings"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(e.target.value)}
              placeholder="Enter current savings"
              required
              className="w-full p-3 text-xl text-black mb-4 rounded border border-gray-300"
            />

            <button
              type="button"
              onClick={updateProgress}
              className="bg-yellow-500 text-2xl text-gray-900 font-bold py-2 px-6 rounded hover:bg-yellow-600 transition duration-300"
            >
              Save Goal
            </button>
          </form>
        </div>

        {/* Progress Display */}
        <div className="max-w-lg mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-4">Savings Progress</h2>
          <div className="bg-white h-8 rounded-full overflow-hidden mb-2 border">
            <div
              className="bg-orange-400 h-full transition-all duration-500 rounded-l-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-lg">{Math.round(progress)}% Complete</p>
        </div>

        {/* Inspirational Message */}
        <div className="italic text-2xl mt-6 text-gray-200">
          <p>"The journey of a thousand miles begins with a single step"</p>
        </div>
      </div>
    </section>
  );
};

export default PiggyBank;
