import React from 'react';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import decor from "../assets/images/decorator.jpg";
import photo from "../assets/images/video.jpg";
import makeup from "../assets/images/makeupa.jpg";
import caterer from "../assets/images/food.jpg";
import mehandi from "../assets/images/mehandi.jpg";
import panditji from "../assets/images/panda.jpg";








const vendors = [
{ name: "Elegant Decor", type: "Decorator", rating: "4.8★",image: decor },
{ name: "Shaadi Clicks", type: "Photographer", rating: "4.7★", image: photo},
{ name: "Glam Studio", type: "Makeup", rating: "4.6★", image: makeup},
{ name: "Traditions Caterers", type: "Catering", rating: "4.9★", image: caterer},
{ name: "Henna Harmony", type: "Mehandi Artist", rating: "4.5★", image: mehandi },
{ name: "Divine Rituals", type: "Pandit Ji", rating: "4.8★", image: panditji },

  ];
  



const FeaturedVendors = () => {
    const containerRef = useRef(null);
     const scroll = (direction) => {
    const { current } = containerRef;
    if (current) {
      current.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
      });
    }
  };
    
  return (
    <section className="py-10 bg-white text-center">
        <h2 className="text-3xl font-bold text-pink-900 mb-6">Featured Vendors</h2>
       
 <div className="relative max-w-6xl mx-auto">
  {/* <div className="flex overflow-x-auto gap-6 px-4 pb-4 scrollbar-hide"> */}
         <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-pink-900 bg-opacity-80 p-2 rounded-full z-10"
          onClick={() => scroll('left')}
        >
          <ChevronLeft size={24} />
        </button>

        <div
          ref={containerRef}
          className="flex overflow-x-scroll space-x-6 py-4 pl-8 pr-8 scroll-smooth"
  style={{ scrollbarWidth: 'none' }} // For Firefox
>

    {vendors.map((vendors, index) => (
      <div
        key={index}
        className="w-64 min-w-[240px] bg-white rounded-xl shadow transform transition-transform duration-500 hover:rotate-y-180 hover:scale-105 flex-shrink-0 cursor-pointer perspective"
      >
        <div className="relative w-full h-40 overflow-hidden rounded-t-xl">
          <img src={vendors.image} alt={vendors.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-pink-800">{vendors.name}</h3>
          <p className="text-gray-700 text-sm mt-2">{vendors.type}</p>
           <p className="text-yellow-600 font-bold">{vendors.rating}</p>
        </div>
      </div>
    ))}
  </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 text-pink-900 p-2 rounded-full z-10"
          onClick={() => scroll('right')}
        >
          <ChevronRight size={24} />
        </button>
      </div>


</section>
  );
};

export default FeaturedVendors;


 