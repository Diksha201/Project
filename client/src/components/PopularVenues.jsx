import React from 'react';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import udaipur from "../assets/images/Udaipur.jpg";
import goa from "../assets/images/goa.jpg";
import lucknow from "../assets/images/lucknow.jpg";
import amritsar from "../assets/images/amritsar.jpg";
import patna from "../assets/images/patna.jpg";
import jaipur from "../assets/images/jaipur.jpg";
import puri from "../assets/images/puri.jpg";
import ranchi from "../assets/images/ranchi.jpg";




const venues = [
  { name: "Royal Palace, Udaipur", city: "Udaipur",image: udaipur},
  { name: "Beach Resort, Goa", city: "Goa",image: goa },
{ name: "Luxury Hall, Lucknow", city: "Lucknow",image: lucknow },
{ name: "Golden Venue, Amritsar", city: "Amritsar", image: amritsar },
{ name: "Royal Banquets, Patna", city: "Patna", image: patna },
{ name: "Heritage Palace, Jaipur", city: "Jaipur", image: jaipur },
{ name: "Sea Breeze Resort, Puri", city: "Puri", image: puri },
{ name: "Hilltop Hall, Ranchi", city: "Ranchi", image: ranchi },
  

];

const PopularVenues = () => {
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
    <section className="py-10 bg-pink-50 text-center">
  <h2 className="text-3xl font-bold text-pink-900 mb-6">Popular Venues</h2>
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

    {venues.map((venues, index) => (
      <div
        key={index}
        className="w-64 min-w-[240px] bg-white rounded-xl shadow transform transition-transform duration-500 hover:rotate-y-180 hover:scale-105 flex-shrink-0 cursor-pointer perspective"
      >
        <div className="relative w-full h-40 overflow-hidden rounded-t-xl">
          <img src={venues.image} alt={venues.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-pink-800">{venues.name}</h3>
          <p className="text-gray-700 text-sm mt-2">{venues.desc}</p>
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

export default PopularVenues;
