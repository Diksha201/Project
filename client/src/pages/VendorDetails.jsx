
import { useState } from "react";
import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/images/makeupa.jpg"

export default function VendorDetails() {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  // Dummy data (replace later with backend)
  const vendor = {
    name: "Riya Makeup Studio",
    city: "Bhopal",
    type: "Bridal Makeup Artist",
    rating: 4.8,
    reviews: 124,
    price: 15000,
    availability: "Available",
    image:
      image1,
    description:
      "Professional bridal makeup artist with 8+ years of experience, specializing in HD and Airbrush makeup.",
  };

  const suggestions = [
    {
      id: 1,
      name: "Glam Touch Studio",
      city: "Bhopal",
      price: 14000,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    },
    {
      id: 2,
      name: "Royal Bride Makeover",
      city: "Indore",
      price: 18000,
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6",
    },
    {
      id: 3,
      name: "Elegant Looks",
      city: "Bhopal",
      price: 16000,
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50">

      {/* IMAGE SECTION */}
      <div className="relative w-80 h-80 border rounded-xl overflow-hidden shadow-md">
          <img
        src="https://i.pinimg.com/736x/5c/4f/94/5c4f94ae84f7a04f8939c53dff33a0b1.jpg"
           className="w-full h-full object-cover"
        alt={vendor.name}
      />

        {/* Wishlist Heart */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
        >
          <Heart
            className={`w-6 h-6 ${
              liked ? "fill-pink-600 text-pink-600" : "text-gray-600"
            }`}
          />
        </button>
      </div>

      {/* DETAILS */}
      <div className="max-w-5xl mx-auto p-6 bg-white mt-5 rounded-xl shadow">

        <h1 className="text-2xl font-semibold">{vendor.name}</h1>
        <p className="text-gray-600 mt-1">
          {vendor.type} • {vendor.city}
        </p>

        {/* Ratings */}
        <div className="flex items-center gap-2 mt-2">
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          <span className="font-medium">{vendor.rating}</span>
          <span className="text-sm text-gray-500">
            ({vendor.reviews} reviews)
          </span>
        </div>

        {/* Availability */}
        <p className="mt-3">
          <span className="font-medium">Availability:</span>{" "}
          <span className="text-green-600">{vendor.availability}</span>
        </p>

        {/* Price */}
        <p className="mt-3 text-lg font-semibold text-pink-600">
          Starting Price: ₹{vendor.price}
        </p>

        {/* Description */}
        <p className="mt-4 text-gray-700 leading-relaxed">
          {vendor.description}
        </p>
      </div>

      {/* SUGGESTIONS */}
      <div className="max-w-6xl mx-auto p-6 mt-10">
        <h2 className="text-xl font-semibold mb-4">
          You may also like 💕
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {suggestions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">{item.city}</p>
                <p className="text-pink-600 font-semibold mt-1">
                  ₹{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FIXED BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg p-4 flex justify-between items-center z-50">
        <div>
          <p className="text-sm text-gray-600">Starting from</p>
          <p className="text-lg font-semibold text-pink-600">
            ₹{vendor.price}
          </p>
        </div>
        

        <div className="flex gap-4">
          <button
           onClick={() => navigate("/cart", { state: vendor })}
            className="mt-5 border border-pink-600 text-pink-600 px-8 py-3 rounded"
          >
            Add to Cart
          </button>
          <button
        onClick={() => navigate("/checkout", { state: vendor })}
        className="mt-5 bg-pink-700 text-white px-8 py-3 rounded"
      >
        Book Now
      </button>
        </div>
      </div>
    </div>
  );
}