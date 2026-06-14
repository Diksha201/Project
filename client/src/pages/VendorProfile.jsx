import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function VendorProfile() {
  const { id } = useParams(); // get vendorId from URL
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/vendor-profile/${id}`);
        setVendor(res.data);
      } catch (error) {
        console.error("Error fetching vendor:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendor();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading vendor profile...</div>;

  if (!vendor) return <div className="text-center mt-10">Vendor not found.</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-3xl font-bold text-pink-800 mb-4">{vendor.name}</h1>
      <img src={vendor.image} alt={vendor.name} className="w-full h-64 object-cover rounded mb-4" />
      <p className="text-gray-700 mb-2"><strong>Type:</strong> {vendor.vendorType}</p>
      <p className="text-gray-700 mb-2"><strong>City:</strong> {vendor.city}</p>
      <p className="text-gray-700 mb-2"><strong>Rating:</strong> {vendor.rating}</p>
      <p className="text-gray-700"><strong>Description:</strong> {vendor.description}</p>
    </div>
  );
}