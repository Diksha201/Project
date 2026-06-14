import React, { useState } from 'react';
import axios from 'axios';

const venuesData = [
  {
    name: "TivoliGrand Resort",
    image: "https://i.pinimg.com/1200x/a2/39/43/a23943ed8325df76e84159110759ffe7.jpg"
  },
  {
    name: "Grand Hotel",
    image: "https://i.pinimg.com/736x/50/cf/9b/50cf9bcde1c8ebecab9992d84983feea.jpg"
  },
  {
    name: "Outdoor",
    image: "https://i.pinimg.com/736x/05/83/ac/0583ac8e5c25e400d54dadd0cb0e7818.jpg"
  },
  {
    name: "Fairy Tale Venue",
    image: "https://i.pinimg.com/1200x/fc/2e/e0/fc2ee0f479373aacf2cb1ac4e6d1b0c3.jpg"
  },
  {
    name: "Caterers",
    image: "https://i.pinimg.com/1200x/89/34/ae/8934aed1c51edb213ab68c571b4ae458.jpg"
  },
  {
    name: "Makeup Artists",
    image: "https://i.pinimg.com/1200x/de/ce/44/dece4446f9cd452ab549b9841fa43865.jpg"
  },
  {
    name: "Decorators",
    image: "https://i.pinimg.com/736x/bf/69/94/bf6994662ad4cae4a5dcaebc91bb03b5.jpg"
  },
  {
    name: "DJ & Music",
    image: "https://i.pinimg.com/1200x/b7/90/a5/b790a5f0481238f413bef52cd5fe4939.jpg"
  },
  {
    name: "Venue Providers",
    image: "https://i.pinimg.com/736x/38/55/da/3855daa19edc7f9afab602888c0d991e.jpg"
  },
  {
    name: "Groom wear designer",
    image: "https://i.pinimg.com/736x/35/99/bf/3599bf2086fb7e11cd2e56b31686e401.jpg"
  },
  {
    name: "Jwellers",
    image: "https://i.pinimg.com/1200x/79/b4/b7/79b4b7da2aaefc6da0330b6e3561d24e.jpg"
  },
  {
    name: "Invitation",
    image: "https://i.pinimg.com/1200x/bb/e9/6b/bbe96b123c941765f2c74bc1de26fe55.jpg"
  },
  {
    name: "Pre-Weeding Shoot",
    image: "https://i.pinimg.com/1200x/fe/ed/26/feed26314af89b8ec5719f007119ed4e.jpg"
  },
  {
    name: "Vehicle Providers",
    image: "https://i.pinimg.com/1200x/a2/34/38/a234385c0da7374e6a57e7f226e2ca23.jpg"
  },
  {
    name: "Dance Choreographers",
    image: "https://i.pinimg.com/1200x/bf/60/dd/bf60dd65b8eb2b9b3c87eae91463161e.jpg"
  }
];

export default function Venues() {
  const [expanded, setExpanded] = useState(null);
  const [venuesInfo, setVenuesInfo] = useState({});
  const selectedCity = localStorage.getItem("selectedCity") || "Patna";

  const handleViewClick = async (venuesName, index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      try {
        const res = await axios.get(`http://localhost:5001/api/services?location=${selectedCity}&category=${venuesName}`);
        const firstMatch = res.data[0]; // Assuming the first vendor is the one to show
        setVenuesInfo((prev) => ({ ...prev, [index]: firstMatch }));
        setExpanded(index);
      } catch (err) {
        console.error(err);
        setVenuesInfo((prev) => ({ ...prev, [index]: { error: "Failed to fetch info." } }));
        setExpanded(index);
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-pink-700 mb-6">Explore Venues in {selectedCity}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {venuesData.map((venue, idx) => (
          <div key={idx} className="p-4 border rounded shadow-sm bg-white">
            <img
              src={venue.image}
              alt={venue.name}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="text-xl font-semibold text-gray-800">{venue.name}</h3>
            <button
              onClick={() => handleViewClick(venue.name, idx)}
              className="mt-3 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
            >
              {expanded === idx ? "Hide" : "View"}
            </button>

            {expanded === idx && (
              <div className="mt-3 bg-gray-100 p-3 rounded text-sm text-gray-800">
                {venuesInfo[idx]?.error ? (
                  <p>{venuesInfo[idx].error}</p>
                ) : venuesInfo[idx] ? (
                  <>
                    <p><strong>Availability:</strong> {venuesInfo[idx].availability || 'Not available'}</p>
                    <p><strong>Price Range:</strong> ₹{venuesInfo[idx].priceStart} - ₹{venuesInfo[idx].priceEnd}</p>
                  </>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}