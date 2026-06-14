import React from "react";

const BookingCard = ({ booking, onCancel, onUpdate }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "text-yellow-500";
      case "confirmed":
        return "text-green-600";
      case "cancelled":
        return "text-red-500";
      default:
        return "text-gray-700";
    }
  };

  return (
    <div className="bg-white shadow-lg border border-pink-300 rounded-lg p-6 mb-6 transition-all duration-300 hover:shadow-pink-400">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-pink-800">{booking.serviceType}</h2>
        <span className={`font-bold ${getStatusColor(booking.status)}`}>
          {booking.status}
        </span>
      </div>

      <div className="space-y-1 text-gray-800">
        <p>
          <span className="font-semibold">Vendor:</span> {booking.vendorName}
        </p>
        <p>
          <span className="font-semibold">Customer:</span> {booking.customerName}
        </p>
        <p>
          <span className="font-semibold">Location:</span> {booking.location}
        </p>
        <p>
          <span className="font-semibold">Date:</span>{" "}
          {new Date(booking.bookingDate).toLocaleDateString()}
        </p>
        <p>
          <span className="font-semibold">Price:</span> ₹{booking.price}
        </p>

        {/* Optional: contact info */}
        {booking.email && (
          <p>
            <span className="font-semibold">Email:</span> {booking.email}
          </p>
        )}
        {booking.phone && (
          <p>
            <span className="font-semibold">Phone:</span> {booking.phone}
          </p>
        )}
      </div>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => onUpdate(booking._id)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded"
        >
          Update
        </button>
        <button
          onClick={() => onCancel(booking._id)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingCard;