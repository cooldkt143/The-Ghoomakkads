import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const App = () => {
  const scrollRef = useRef(null);
  const scrollRef1 = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (container) {
        const scrollAmount = container.clientWidth ;

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
      {
        img: '/images/d3.jpg',
        alt: 'coorg, Karnataka',
        subtitle: 'coorg',
        title: 'Karnataka',
      },
      {
        img: '/images/d2.jpg',
        alt: 'sela pass, tawang',
        subtitle: 'Tawang (Arunachal)',
        title: 'Sela Pass',
      },
      {
        img: '/images/d1.webp',
        alt: 'kang suri, Meghalaya',
        subtitle: 'Meghalaya',
        title: 'Kang Suri Falls',
      },
      {
        img: '/images/d4.avif',
        alt: 'Kathmandu, Nepal',
        subtitle: 'Odisha',
        title: 'Jirang',
      },
      {
        img: '/images/d5.webp',
        alt: 'Jakarta, Indonesia',
        subtitle: 'Odisha',
        title: 'Koraput',
      },
      {
        img: '/images/d6.png',
        alt: 'Kodaikanal (Tamil Nadu)',
        subtitle: 'Kodaikanal',
        title: 'Tamil Nadu',
      },
      {
        img: '/images/d7.png',
        alt: ' Kankaria Lake (Gujrat)',
        subtitle: 'Kankaria Lake',
        title: 'Gujrat',
      },
      {
        img: '/images/d8.png',
        alt: 'Kullu Manali (Himachal Pradesh)',
        subtitle: 'Kullu Manali',
        title: 'Himachal Pradesh',
      },
    ];

    const categoryy = [
      {
        img: '/images/Mountaining.jpeg',
        alt: 'Malé, Maldives',
        subtitle: 'Travel With',
        title: 'Mountaineering',
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

    <>
    
    <div className="pt-24 px-4 sm:px-8 lg:px-20 xl:px-32 2xl:px-40 bg-gray-100 min-h-screen">

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
                    className="min-w-full min-h-[390px] bg-white rounded-xl shadow-md text-center p-4 flex-shrink-0"
                  >
                    <img
                      src={category.img}
                      alt={category.alt}
                      className="w-full h-[330px] mx-auto mb-4 rounded-[1%] object-cover "
                      loading="lazy"
                    />
                    <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
                  </div>
                ))}
              </div>
      </div>

      <div className="relative mb-5">
        {/* Left arrow */}
        <a
          onClick={() => scroll1('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-1"
        >
          <ChevronLeft className="w-5 h-5" />
        </a>

        {/* Scrollable cards */}
          <div
                ref={scrollRef1}
                className="flex overflow-x-auto space-x-4 py-2 px-8 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="min-w-[240px] min-h-[240px] bg-white rounded-xl shadow-md text-center p-4 flex-shrink-0"
                  >
                    <img
                      src={category.img}
                      alt={category.alt}
                      className="w-[350px] h-[200px] mx-auto mb-4 rounded object-cover transition-transform duration-300 hover:scale-105"
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
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-1"
        >
          <ChevronRight className="w-5 h-5" />
        </a>
      </div>
    </div>
    </>
  );
};

export default App;
