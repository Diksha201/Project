import { useNavigate } from "react-router-dom";
import image1 from "../assets/images/makeupa.jpg";

import {Star } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();

  

  // Dummy data (later replace with Redux / backend data)
  const order = {
    vendorName: "Riya Makeup Studio",
    service: "Bridal Makeup",
    city: "Bhopal",
    date: "10 Feb 2025",
    price: 15000,
    platformFee: 500,
      rating: 4.8,
  image: image1,
  };

  const totalAmount = order.price + order.platformFee;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT SECTION */}
        <div className="md:col-span-2 space-y-6">

          {/* Address Section */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Book at :</h2>
            <div className="text-sm text-gray-700">
              <p className="font-medium">Diksha Singh</p>
              <p>Ramnagar Chowk</p>
              <p>Bhopal, Madhya Pradesh</p>
              <p>462001</p>
              <p>📞 9876543210</p>
            </div>
            <button
              onClick={() => navigate("/address")}
              className="mt-4 text-pink-600 font-medium"
            >
              Change Address
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">📦 Order Summary</h2>
         <div className="flex items-start gap-4 border-b pb-4">

     {/* PRODUCT IMAGE */}
    <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-200 shrink-0">
    <img
      src={order.image}
      alt={order.vendorName}
      className="w-full h-full object-cover"
    />
  </div>

  {/* PRODUCT DETAILS */}
  <div className="flex-1">
    <p className="font-medium">{order.vendorName}</p>
    <p className="text-sm text-gray-600">{order.service}</p>
    <p className="text-sm text-gray-600">
      {order.city} • {order.date}
    </p>

    {/* RATING */}
     <div className="flex items-center gap-2 mt-2">
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          <span className="font-medium">{order.rating}</span>
          <span className="text-sm text-gray-500">
            ({order.reviews} reviews)
          </span>
        </div>
        </div>

  {/* PRICE */}
  <p className="font-semibold whitespace-nowrap">
    ₹{order.price}
  </p>
</div>
</div>
</div>
        {/* RIGHT SECTION */}
        <div className="bg-white rounded-xl shadow p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">💰 Price Details</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Service Price</span>
              <span>₹{order.price}</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>₹{order.platformFee}</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-base">
              <span>Total Amount</span>
              <span className="text-pink-600">₹{totalAmount}</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/payment")}
            className="mt-6 w-full bg-green-500 hover:bg-green-700 text-white py-3 rounded-lg font-medium"
          >
            Proceed to Payment
          </button>

          <p className="text-xs text-gray-500 mt-3 text-center">
            100% secure payments • Easy cancellation
          </p>
        </div>
      </div>
    </div>
  );
}