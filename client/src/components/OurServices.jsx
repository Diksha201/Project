import React from 'react';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import venueImg from "../assets/images/amritsar.jpg";
import decoratorImg from "../assets/images/flowers.jpg";
import photographerImg from "../assets/images/photo.jpg";
import makeupImg from "../assets/images/makeup.jpg";
import panditImg from "../assets/images/panditji.jpg";
import mehandiImg from "../assets/images/hero.png";
import foodImg from "../assets/images/catering.jpg";
import shootImg from "../assets/images/prewedding.jpg";
import bridalImg from "../assets/images/bwear.jpg";
import groomImg from "../assets/images/gwear.jpg";
import jewelleryImg from "../assets/images/jwellery.jpg";
import Einvites from "../assets/images/invitation.jpg";


const services = [
  { name: "Venues", desc: "Transform your venue into a dreamland.", image: venueImg },
  { name: "Decorator", desc: "Transform your venue into a dreamland.", image: decoratorImg },
  { name: "Photographer", desc: "Capture every moment beautifully.", image: photographerImg },
  { name: "Makeup Artist", desc: "Look stunning on your special day.", image: makeupImg },
  { name: "Pandit Ji", desc: "For all your traditional rituals.", image: panditImg },
  { name: "Mehandi", desc: "Traditional henna artistry.", image: mehandiImg },
  { name: "Food", desc: "Delicious food for every occasion.", image: foodImg },
  { name: "Pre-Wedding Shoot", desc: "Memories before the vows.", image: shootImg },
  { name: "Bridal Wear", desc: "Style your dream wedding look.", image: bridalImg },
  { name: "Groom Wear", desc: "Suits to make a statement.", image: groomImg },
  { name: "Jewellery", desc: "Shine like never before.", image: jewelleryImg },
  { name: "E-Invites", desc: "Elegant and eco-friendly digital invitations.",image: Einvites },

];

const OurServices = () => {
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
  <h2 className="text-3xl font-bold text-pink-900 mb-6">Our Services</h2>
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

    {services.map((service, index) => (
      <div
        key={index}
        className="w-64 min-w-[240px] bg-pink-50 rounded-xl shadow transform transition-transform duration-500 hover:rotate-y-180 hover:scale-105 flex-shrink-0 cursor-pointer perspective"
      >
        <div className="relative w-full h-40 overflow-hidden rounded-t-xl">
          <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-pink-800">{service.name}</h3>
          <p className="text-gray-700 text-sm mt-2">{service.desc}</p>
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

export default OurServices;