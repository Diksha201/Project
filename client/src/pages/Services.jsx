import React, { useState, useEffect } from 'react';
import axios from 'axios';

const vendorData = [
  {
    name: "Mehndi Artist",
    image: "https://i.pinimg.com/1200x/75/54/39/75543947f10a05e307399af636852c57.jpg"
  },
  {
    name: "Bridal wear Designers",
    image: "https://i.pinimg.com/736x/4d/82/6e/4d826e7e3290de383554907f190b679d.jpg"
  },
  {
    name: "Panditji",
    image: "https://i.pinimg.com/736x/1c/cb/7e/1ccb7ecadcac8c024cbe24663850201d.jpg"
  },
  {
    name: "Photographers",
    image: "https://i.pinimg.com/736x/00/70/25/00702515e81c6d811958c647c448fe98.jpg"
  },
  {
    name: "Caterers",
    image: "https://i.pinimg.com/1200x/88/50/ea/8850ea685cf18e8ad48758a6164269a1.jpg"
  },
  {
    name: "Makeup Artists",
    image: "https://i.pinimg.com/1200x/12/4a/12/124a120184e21b9393e659a5b9f48c56.jpg"
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

export default function Services() {
  const [expanded, setExpanded] = useState(null); // track which vendor is opened
  const [vendorInfo, setVendorInfo] = useState({});
  const selectedCity = localStorage.getItem("selectedCity") || "Patna"; // Fallback if city not selected

  const handleViewClick = async (vendorName, index) => {
    if (expanded === index) {
      setExpanded(null); // collapse
    } else {
      try {
        const res = await axios.get(`http://localhost:5001/api/vendors?category=${vendorName}&city=${selectedCity}`);
        setVendorInfo((prev) => ({ ...prev, [index]: res.data }));
        setExpanded(index);
      } catch (err) {
        console.error(err);
        setVendorInfo((prev) => ({ ...prev, [index]: { error: "Failed to fetch info." } }));
        setExpanded(index);
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-pink-700 mb-6">Explore Vendors in {selectedCity}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vendorData.map((vendor, idx) => (
          <div key={idx} className="p-4 border rounded shadow-sm bg-white">
            <img
              src={vendor.image}
              alt={vendor.name}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="text-xl font-semibold text-gray-800">{vendor.name}</h3>
            <button
              onClick={() => handleViewClick(vendor.name, idx)}
              className="mt-3 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
            >
              {expanded === idx ? "Hide" : "View"}
            </button>

            {expanded === idx && (
              <div className="mt-3 bg-gray-100 p-3 rounded text-sm text-gray-800">
                {vendorInfo[idx]?.error ? (
                  <p>{vendorInfo[idx].error}</p>
                ) : vendorInfo[idx] ? (
                  <>
                    <p><strong>Availability:</strong> {vendorInfo[idx].availability}</p>
                    <p><strong>Price Range:</strong> ₹{vendorInfo[idx].priceStart} - ₹{vendorInfo[idx].priceEnd}</p>
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

