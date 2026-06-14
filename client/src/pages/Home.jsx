import React, { useState, useEffect } from 'react';

import { searchVendors } from "../api/vendorApi";
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import image1 from "../assets/images/hero.jpg";
import image2 from "../assets/images/hero1.jpg";
import image3 from "../assets/images/hero2.jpg";
import image4 from "../assets/images/hero.png";
import image5 from "../assets/images/hero4.jpg";
import OurServices from "../components/OurServices";
import PopularVenues from "../components/PopularVenues";
import FeaturedVendors from '../components/FeaturedVendors';
import Review from '../components/Review';
import { useNavigate } from 'react-router-dom';



export default function Home() {
 const [vendorType, setVendorType] = useState("");
  const [city, setCity] = useState("");
    const [vendors, setVendors] = useState([]);
      const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!vendorType || !city) {
      alert("Please select both vendor type and city");
      return;
    }

  
    navigate(`/search?service=${vendorType}&city=${city}`);
  };
  const slides = [
    {
      image: image1,
      title: "Sealed with a Garland, Blessed for Life",
      subtitle: "Celebrate the sacred exchange of love and tradition"
    },
    {
      image: image2,
      title: "Find the Perfect Vendors",
      subtitle: "Caterers, Decorators, Pandits & More"
    },
    {
      image: image3,
      title: "Celebrate Love in Style",
      subtitle: "Discover Breathtaking Venues Across India"
    },
    {
      image: image4,
      title: "Make Your Wedding Memorable",
      subtitle: "From Mehndi to Bidaai – We Plan It All"
    },
    {
      image: image5,
     title: "Haldi Hues, Sacred Vows",
     subtitle: "A splash of turmeric, a lifetime of joy begins"
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };



  return (
    <div className="relative w-full ">
      {/* Carousel */}
      <div className="relative overflow-hidden">
        <img
          src={slides[current].image}
          alt={`Slide ${current + 1}`}
          className="w-full h-[400px] sm:h-[550px] object-cover transition-all duration-700 ease-in-out"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0  brightness-125 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-3xl sm:text-5xl font-extrabold drop-shadow-lg">{slides[current].title}</h2>
          <p className="text-white text-lg sm:text-xl mt-2 drop-shadow-md">{slides[current].subtitle}</p>

          {/* Search Bar */}
          <div className="mt-6 bg-white bg-opacity-10 rounded-lg shadow-md p-3 sm:p-4 w-full max-w-2xl flex flex-col sm:flex-row items-center gap-3">
             <select
             value={vendorType}
        onChange={(e) => setVendorType(e.target.value)}

              className="bg-white bg-opacity-10 flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-900 w-full text-pink-900 font-bold"
            >
              <option value="">Select Vendor Type</option>
               <option value="Decorator">Decorator</option>
              <option value="Photographer">Photographer</option>
              <option value="Makeup Artist">Makeup Artist</option>
              <option value="Pandit Ji">Pandit Ji</option>
              <option value="Venue">Wedding Venue</option>
<option value="Caterer">Caterer</option>
<option value="Bridal Wear">Bridal Wear</option>
<option value="Groom Wear">Groom Wear</option>
<option value="Jewellery">Jewellery</option>
<option value="PreWedding">Pre-Wedding Shoot</option>
<option value="Einvites">E-Invites</option>
<option value="Band">Band/Baarat</option>
<option value="DJ">DJ / Music</option>
<option value="WeddingPlanner">Wedding Planner</option>
<option value="Cake">Cake & Bakery</option>
<option value="Transport">Transport / Car Rental</option>
<option value="Gift">Wedding Gifts & Favors</option>
            
 </select>

 {/* cities */}
<select
value={city}
onChange={(e) => setCity(e.target.value)}
className="bg-white bg-opacity-10 flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-900 w-full text-pink-900 font-bold"
            >
<option value="">City</option>
<option value="Agartala">Agartala</option>
<option value="Agra">Agra</option>
<option value="Ahmedabad">Ahmedabad</option>
<option value="Aizawl">Aizawl</option>
<option value="Amaravati">Amaravati</option>
<option value="Amritsar">Amritsar</option>
<option value="Bangalore">Bangalore</option>
<option value="Bengaluru">Bengaluru</option>
<option value="Bhopal">Bhopal</option>
<option value="Bhubaneswar">Bhubaneswar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chennai">Chennai</option>
<option value="Dehradun">Dehradun</option>
<option value="Delhi">Delhi</option>
<option value="Dispur">Dispur</option>
<option value="Gangtok">Gangtok</option>
<option value="Gandhinagar">Gandhinagar</option>
<option value="Goa">Goa</option>
<option value="Hyderabad">Hyderabad</option>
<option value="Imphal">Imphal</option>
<option value="Indore">Indore</option>
<option value="Itanagar">Itanagar</option>
<option value="Jaipur">Jaipur</option>
<option value="Jodhpur">Jodhpur</option>
<option value="Kanpur">Kanpur</option>
<option value="Kohima">Kohima</option>
<option value="Kolkata">Kolkata</option>
<option value="Lucknow">Lucknow</option>
<option value="Ludhiana">Ludhiana</option>
<option value="Mumbai">Mumbai</option>
<option value="Nagpur">Nagpur</option>
<option value="Noida">Noida</option>
<option value="Panaji">Panaji</option>
<option value="Patna">Patna</option>
<option value="Pune">Pune</option>
<option value="Puri">Puri</option>
<option value="Raipur">Raipur</option>
<option value="Ranchi">Ranchi</option>
<option value="Shimla">Shimla</option>
<option value="Shillong">Shillong</option>
<option value="Srinagar">Srinagar</option>
<option value="Surat">Surat</option>
<option value="Udaipur">Udaipur</option>
<option value="Varanasi">Varanasi</option>
<option value="Vijayawada">Vijayawada</option>
<option value="Visakhapatnam">Visakhapatnam</option>
            </select>
            <button 
             onClick={handleSearch}
            className="bg-pink-900 text-white px-5 py-2 rounded  transition w-full sm:w-auto flex items-center justify-center gap-2 hover:animate-bounce">
              <Search size={18} />
              Search
            </button>
          </div>
        </div>

        {/* Chevron Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-pink-900 rounded-full p-2 shadow"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-pink-900 rounded-full p-2 shadow"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === idx ? 'bg-pink-800' : 'bg-white'
              } border border-pink-800`}
            />
          ))}
        </div>
      </div>

 
        <OurServices />
    
       <PopularVenues />

      
      <FeaturedVendors/>
      <Review/>
      
     
      {/* <Hero/> */}
     
    </div>
   
  );
}

