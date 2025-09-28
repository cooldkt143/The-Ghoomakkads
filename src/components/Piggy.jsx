import React from 'react';
import { IonIcon } from '@ionic/react';
import { compass, briefcase, umbrella, navigate } from 'ionicons/icons';
import piggyImg from '../assets/images/7 Things Frequent Travelers Do to Save Money for Vacations.jpg';
import { useNavigate } from 'react-router-dom';

const Piggy = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 items-center">
        <div className="lg:w-1/2">
          <p className="text-3xl lg:text-6xl font-['Brush_Script_MT',cursive] text-left text-rose-500 font-medium mb-2">Out of Money!!!</p>
          <h2 className="text-2xl lg:text-4xl text-left font-['Abril_Fatface'] font-bold text-gray-800 mb-6">
            Explore all tour of the world with us.
          </h2>
          <p className="text-base lg:text-[20px] text-left text-gray-600 mb-8">
            Budget is an essential aspect of any journey, and we're here to
            empower users to save money by providing our budget-friendly
            options and an innovative digital saving feature.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="text-2xl text-rose-500 mt-1"><IonIcon icon={compass} /></div>
              <div>
                <h3 className="text-2xl lg:text-3xl text-left font-semibold text-gray-700 mb-1">Money guide</h3>
                <p className="text-left text-base lg:text-[20px] text-gray-600">
                  We encourage our users to save minimal money at regular intervals
                  which can be retrieved later and used for their next trips.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="text-2xl text-rose-500 mt-1"><IonIcon icon={briefcase} /></div>
              <div>
                <h3 className="text-2xl lg:text-3xl text-left font-semibold text-gray-700 mb-1">Friendly price</h3>
                <p className="text-left text-base lg:text-[20px] text-gray-600">
                  By purchasing 1 digital coin which will be equivalent to 1 INR.
                  You may access this anytime you want during your journey/ your future trips.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="text-2xl lg:text-2xl text-rose-500 mt-1"><IonIcon icon={umbrella} /></div>
              <div>
                <h3 className="text-2xl lg:text-3xl text-left font-semibold text-gray-700 mb-1">When to Save?</h3>
                <p className="text-left text-base lg:text-[20px] text-gray-600">
                  The time when you're at your home (when not travelling), you may save a little amount.
                  This saving approach will prevent them from reconsidering their budget while planning their trips.
                </p>
              </div>
            </li>
          </ul>

          <a 
            onClick={() => navigate('/piggybank')}
           className="items-left text-xl lg:text-3xl mt-8 bg-rose-400 text-white w-65 h-15 px-7 py-2 rounded-full hover:bg-rose-500 transition">
            SaveNow!
          </a>
        </div>

        <div className="hidden lg:block lg:w-1/2 w-full p-8">
          <img src={piggyImg} alt="Saving for Travel" className="rounded-xl text-right shadow-lg w-full" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Piggy;
