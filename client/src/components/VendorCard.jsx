import React from "react";

export default function VendorCard({ vendor }) {
  return (
    <div className="border rounded-lg shadow">
      <img
        src={vendor.image || "https://via.placeholder.com/300"}
        alt={vendor.name}
        className="h-48 w-full object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="font-semibold">{vendor.name}</h3>
        <p className="text-pink-600 font-bold">₹{vendor.price}</p>
        <p className="text-sm">⭐ {vendor.rating}</p>
        <p className="text-xs">{vendor.city}</p>
      </div>
    </div>
  );
}