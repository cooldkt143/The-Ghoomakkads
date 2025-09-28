import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import all images from ../assets/images
import d1 from '../assets/images/d1.webp';
import d2 from '../assets/images/d2.jpg';
import d3 from '../assets/images/d3.jpg';
import d4 from '../assets/images/d4.avif';
import d5 from '../assets/images/d5.webp';
import d6 from '../assets/images/d6.png';
import d7 from '../assets/images/d7.png';
import d8 from '../assets/images/d8.png';
import Mountaining from '../assets/images/Mountaining.jpeg';
import Hands from '../assets/images/Hands.gif';
import MoneyGif from '../assets/images/moneygif.gif';

const Body = () => {
  const scrollRef = useRef(null);
  const scrollRef1 = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (container) {
        const scrollAmount = container.clientWidth;

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const categories = [
    { img: d3, alt: 'coorg, Karnataka', subtitle: 'coorg', title: 'Karnataka' },
    { img: d2, alt: 'sela pass, tawang', subtitle: 'Tawang (Arunachal)', title: 'Sela Pass' },
    { img: d1, alt: 'kang suri, Meghalaya', subtitle: 'Meghalaya', title: 'Kang Suri Falls' },
    { img: d4, alt: 'Kathmandu, Nepal', subtitle: 'Odisha', title: 'Jirang' },
    { img: d5, alt: 'Jakarta, Indonesia', subtitle: 'Odisha', title: 'Koraput' },
    { img: d6, alt: 'Kodaikanal (Tamil Nadu)', subtitle: 'Kodaikanal', title: 'Tamil Nadu' },
    { img: d7, alt: 'Kankaria Lake (Gujrat)', subtitle: 'Kankaria Lake', title: 'Gujrat' },
    { img: d8, alt: 'Kullu Manali (Himachal Pradesh)', subtitle: 'Kullu Manali', title: 'Himachal Pradesh' },
  ];

  const categoryy = [
    { img: Mountaining, alt: 'Malé, Maldives', subtitle: 'Travel With', title: 'Mountaineering' },
    { img: Hands, alt: 'Bangkok, Thailand', subtitle: 'Pin Your', title: 'Travel' },
    { img: MoneyGif, alt: 'Kuala Lumpur, Malaysia', subtitle: 'Save For Your', title: 'Upcoming Trips' },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scroll1 = (direction) => {
    const container1 = scrollRef1.current;
    if (container1) {
      const scrollAmount1 = direction === 'left' ? -300 : 300;
      container1.scrollBy({ left: scrollAmount1, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 px-4 sm:px-5 lg:px-20 xl:px-32 2xl:px-40 bg-gray-100 min-h-screen">
      <div className="relative mb-5">
        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 py-2 px-12 whitespace-nowrap scroll-smooth px-4 py-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categoryy.map((category, index) => (
            <div
              key={index}
              className="min-w-full lg:min-w-full min-h-[190px] lg:min-h-[390px] bg-white rounded-xl shadow-md text-center p-4 flex-shrink-0"
            >
              <img
                src={category.img}
                alt={category.alt}
                className="w-full lg:w-full h-[130px] lg:h-[330px] mx-auto mb-4 rounded-[1%] object-cover"
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        {/* Left arrow */}
        <a
          onClick={() => scroll1('left')}
          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-1"
        >
          <ChevronLeft className="w-5 h-5" />
        </a>

        {/* Scrollable cards */}
        <div
          ref={scrollRef1}
          className="flex overflow-x-auto space-x-4 py-2 px-2 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="min-w-[140px] min-h-[140px] lg:min-w-[240px] lg:min-h-[240px] bg-white rounded-xl shadow-md text-center p-4 flex-shrink-0"
            >
              <img
                src={category.img}
                alt={category.alt}
                className="w-[190px] h-[150px] lg:w-[350px] lg:h-[200px] mx-auto mb-4 rounded object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              <p className="text-sm text-gray-500">{category.subtitle}</p>
              <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <a
          onClick={() => scroll1('right')}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-1"
        >
          <ChevronRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default Body;
