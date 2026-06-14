import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function OrderSuccess() {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrder = localStorage.getItem("vivaahvows_order");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-semibold">No order found 😔</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <CheckCircle className="text-green-500 w-20 h-20 mb-6" />

      <h1 className="text-3xl font-bold mb-2">🎉 Booking Successful! 🎉</h1>
      <p className="text-gray-600 mb-6 text-center">
        Your booking has been confirmed. Thank you for choosing VivaahVows!
      </p>

      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mb-6">
        <h2 className="text-lg font-semibold mb-4">📦 Order Summary</h2>

        <div className="flex justify-between">
          <p className="font-medium">{order.vendorName}</p>
          <p className="font-semibold">₹{order.price}</p>
        </div>

        <p className="text-sm text-gray-500">{order.service}</p>
        <p className="text-sm text-gray-500">
          {order.city} • {order.date}
        </p>

        <div className="mt-4 flex justify-between border-t pt-2">
          <span>Platform Fee</span>
          <span>₹{order.platformFee}</span>
        </div>

        <div className="mt-2 flex justify-between border-t pt-2 font-semibold">
          <span>Total</span>
          <span>₹{order.price + order.platformFee}</span>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="bg-pink-600 text-white px-6 py-2 rounded-lg"
        >
          Go to Home
        </button>

        <button
          onClick={() => navigate("/bookings")}
          className="bg-gray-200 px-6 py-2 rounded-lg"
        >
          View My Bookings
        </button>
      </div>
    </div>
  );
}
