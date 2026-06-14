import { useEffect, useState } from "react";
import { CalendarDays, MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/images/makeupa.jpg";

export default function Bookings() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from localStorage (replace with API later)
    const savedOrder = localStorage.getItem("vivaahvows_order");

    if (savedOrder) {
      setBookings([JSON.parse(savedOrder)]);
    }
  }, []);

  // NO BOOKINGS UI
  if (bookings.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076503.png"
          alt="No bookings"
          className="w-40 mb-6 opacity-80"
        />

        <h2 className="text-2xl font-semibold mb-2">
          You don't have any bookings 😔
        </h2>

        <p className="text-gray-600 mb-6 text-center">
          Looks like you haven't booked any wedding service yet.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
        >
          Book a Service
        </button>
      </div>
    );
  }

  // ✅ BOOKINGS LIST
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        💍 My Bookings
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {bookings.map((booking, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md flex flex-col sm:flex-row overflow-hidden"
          >
            {/* IMAGE */}
            <img
              src={
                booking.image ||
               image1
              }
              alt={booking.vendorName}
              className="w-full sm:w-56 h-48 object-cover"
            />

            {/* DETAILS */}
            <div className="p-5 flex-1">
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-semibold">
                  {booking.vendorName}
                </h2>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  Confirmed
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-1">
                {booking.service}
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <MapPin size={16} />
                {booking.city}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <CalendarDays size={16} />
                {booking.date}
              </div>

              <div className="flex items-center gap-1 mt-3">
                <Star className="text-yellow-400" size={16} />
                <span className="text-sm font-medium">4.8</span>
              </div>
            </div>

            {/* PRICE */}
            <div className="p-5 flex flex-col justify-between border-t sm:border-t-0 sm:border-l">
              <p className="text-lg font-bold text-pink-600">
                ₹{booking.price + booking.platformFee}
              </p>

              <button
                onClick={() => navigate("/")}
                className="mt-4 bg-pink-600 border border-pink-800 text-white px-4 py-2 rounded-lg hover:bg-pink-800 transition text-sm"
              >
                Book Again
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}