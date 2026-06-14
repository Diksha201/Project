import { useState } from "react";
import { CreditCard, IndianRupee, Wallet, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  const totalAmount = 15299;
  const [hovered, setHovered] = useState(null);

  // ✅ Mock order data (later you can make this dynamic)
  const orderData = {
    vendorName: "Royal Makeup Studio",
    service: "Bridal Makeup",
    city: "Bhopal",
    date: "12 Feb 2025",
    price: 15000,
    platformFee: 299,
  };

  // ✅ COMMON HANDLER FOR PAYMENT SUCCESS
  const handlePaymentSuccess = () => {
    localStorage.setItem(
      "vivaahvows_order",
      JSON.stringify(orderData)
    );

    navigate("/order-success");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">

        {/* TOTAL AMOUNT */}
        <div className="text-center mb-6">
          <h2 className="text-lg text-gray-600">Total Amount Payable</h2>
          <p className="text-3xl font-bold text-pink-600 mt-2">
            ₹{totalAmount}
          </p>
        </div>

        {/* PAYMENT OPTIONS */}
        <div className="space-y-4">

          {/* UPI */}
          <div
            onMouseEnter={() => setHovered("upi")}
            onMouseLeave={() => setHovered(null)}
            className="border rounded-xl p-4 flex items-center justify-between hover:border-pink-600 transition"
          >
            <div className="flex items-center gap-3">
              <Wallet className="text-pink-600" />
              <div>
                <p className="font-semibold">UPI</p>
                <p className="text-sm text-gray-500">
                  Google Pay, PhonePe, Paytm
                </p>
              </div>
            </div>

            {hovered === "upi" && (
              <button
                onClick={handlePaymentSuccess}
                className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Pay Now
              </button>
            )}
          </div>

          {/* BANK / CARD */}
          <div
            onMouseEnter={() => setHovered("bank")}
            onMouseLeave={() => setHovered(null)}
            className="border rounded-xl p-4 flex items-center justify-between hover:border-pink-600 transition"
          >
            <div className="flex items-center gap-3">
              <CreditCard className="text-pink-600" />
              <div>
                <p className="font-semibold">Bank / Card</p>
                <p className="text-sm text-gray-500">
                  Debit Card, Credit Card, Net Banking
                </p>
              </div>
            </div>

            {hovered === "bank" && (
              <button
                onClick={handlePaymentSuccess}
                className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Pay Now
              </button>
            )}
          </div>

          {/* GIFT CARD */}
          <div
            onMouseEnter={() => setHovered("gift")}
            onMouseLeave={() => setHovered(null)}
            className="border rounded-xl p-4 flex items-center justify-between hover:border-pink-600 transition"
          >
            <div className="flex items-center gap-3">
              <Gift className="text-pink-600" />
              <div>
                <p className="font-semibold">Gift Card</p>
                <p className="text-sm text-gray-500">
                  Redeem VivaahVows vouchers
                </p>
              </div>
            </div>

            {hovered === "gift" && (
              <button
                onClick={handlePaymentSuccess}
                className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Redeem Now
              </button>
            )}
          </div>

          {/* CASH ON DELIVERY */}
          <div
            onMouseEnter={() => setHovered("cod")}
            onMouseLeave={() => setHovered(null)}
            className="border rounded-xl p-4 flex items-center justify-between hover:border-green-600 transition"
          >
            <div className="flex items-center gap-3">
              <IndianRupee className="text-green-600" />
              <div>
                <p className="font-semibold">Cash on Delivery</p>
                <p className="text-sm text-gray-500">
                  Pay at the time of service
                </p>
              </div>
            </div>

            {hovered === "cod" && (
              <button
                onClick={handlePaymentSuccess}
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Confirm Booking
              </button>
            )}
          </div>
        </div>

        <p className="text-xs text-center text-gray-500 mt-6">
          100% Secure Payments • VivaahVows 💖
        </p>
      </div>
    </div>
  );
}