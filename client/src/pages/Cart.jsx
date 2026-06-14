import { useNavigate } from "react-router-dom";
import { Trash2, CalendarCheck } from "lucide-react";
import { useState } from "react";

export default function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      vendorName: "Royal Wedding Decor",
      service: "Wedding Decoration",
      city: "Delhi",
      date: "12 Feb 2026",
      price: 25000,
      rating: 4.8,
      image:
        "http://localhost:3000/static/media/makeupa.7c675d466fcaa32220c2.jpg",
    },
  ]);

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // EMPTY CART UI
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <h1 className="text-2xl font-semibold mb-2">🛒 Your Cart is Empty</h1>
        <p className="text-gray-600 mb-4">
          You haven’t added any services yet.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700"
        >
          Explore Services
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🛒 My Cart</h1>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row gap-4"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.vendorName}
                className="w-full md:w-48 h-40 object-cover rounded-lg"
              />

              {/* DETAILS */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold">
                  {item.vendorName}
                </h2>
                <p className="text-gray-600">{item.service}</p>
                <p className="text-sm text-gray-500">
                  📍 {item.city} • 📅 {item.date}
                </p>
                <p className="text-sm mt-1">⭐ {item.rating}</p>

                <p className="text-lg font-bold text-pink-600 mt-2">
                  ₹{item.price}
                </p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex md:flex-col gap-3 justify-between">
                <button
                  onClick={() => navigate("/checkout")}
                  className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
                >
                  <CalendarCheck size={18} />
                  Book Now
                </button>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 transition"
                >
                  <Trash2 size={18} />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}