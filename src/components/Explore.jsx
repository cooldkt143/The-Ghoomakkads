import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Explore = ({ categories }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -450 : 450;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-2xl font-bold lg:text-[50px] font-['Abril_Fatface'] text-gray-500 mb-2">Features that We Offer</p>
        <h2 className="lg:text-6xl text-xl font-['Brush_Script_MT',cursive] text-center text-rose-500 lg:mb-12">Explore!!!!</h2>

        <div className="relative">
          <a onClick={() => scroll('left')} className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-1">
            <ChevronLeft className="w-5 h-5" />
          </a>

          <div ref={scrollRef} className="flex overflow-x-auto space-x-4 py-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {categories.map((category, index) => (
              <div key={index} className="min-w-[250px] min-h-[300px] lg:min-w-[340px] lg:min-h-[300px] bg-gray-100 rounded-xl shadow-md text-center p-4 flex-shrink-0">
                <img src={category.img} alt={category.alt} className="w-[200px] lg:w-full h-[180px] mx-auto mb-4 rounded object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
                <p className="text-sm text-gray-500">{category.subtitle}</p>
                <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
              </div>
            ))}
          </div>

          <a onClick={() => scroll('right')} className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-1">
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Explore;
