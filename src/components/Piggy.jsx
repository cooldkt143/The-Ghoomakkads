import React from 'react';
import { IonIcon } from '@ionic/react';
import { compass, briefcase, umbrella } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/Background/piggy_home_bg.jpg';

const Piggy = () => {
  const navigate = useNavigate();

  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Content */}
        <div className="lg:w-1/2  p-8">
          <p className="text-3xl lg:text-6xl font-['Brush_Script_MT',cursive] text-left text-yellow-600 font-medium mb-2">
            Out of Money!!!
          </p>
          <h2 className="text-2xl lg:text-4xl text-left font-['Abril_Fatface'] font-bold text-gray-100 mb-6">
            Explore all tours of the world with us.
          </h2>
          <p className="text-base lg:text-[20px] text-left text-gray-400 mb-8">
            Budget is an essential aspect of any journey, and we're here to empower users to save money by providing our budget-friendly options and an innovative digital saving feature.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="text-2xl text-gray-900 mt-1">
                <IonIcon icon={compass} />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-100 mb-1">
                  Money Guide
                </h3>
                <p className="text-base lg:text-[20px] text-gray-400">
                  We encourage our users to save minimal money at regular intervals which can be retrieved later and used for their next trips.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="text-2xl text-gray-900 mt-1">
                <IonIcon icon={briefcase} />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-100 mb-1">
                  Friendly Price
                </h3>
                <p className="text-base lg:text-[20px] text-gray-400">
                  By purchasing 1 digital coin, which will be equivalent to 1 INR, you may access this anytime you want during your journey or future trips.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="text-2xl text-gray-900 mt-1">
                <IonIcon icon={umbrella} />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-100 mb-1">
                  When to Save?
                </h3>
                <p className="text-base lg:text-[20px] text-gray-400">
                  The time when you're at home (when not travelling), you may save a little amount. This approach prevents reconsidering the budget while planning trips.
                </p>
              </div>
            </li>
          </ul>

          <button
            onClick={() => navigate('/piggybank')}
            className="mt-8 text-xl lg:text-2xl bg-gray-600 text-white px-7 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Save Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Piggy;
