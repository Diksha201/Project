import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";

export default function SearchResults() {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);

  const service = query.get("service");
  const city = query.get("city");

  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5001/api/vendors/search?service=${service}&city=${city}`
        );
              console.log("API RESPONSE", res.data);

        setVendors(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, [service, city]);

  if (loading) return <p className="p-6">Loading vendors...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        {service} in {city}
      </h2>

      {vendors.length === 0 ? (
        <p>No vendors found</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {vendors.map((vendor) => (
            <div key={vendor._id} className="border rounded-lg shadow">
              <img
                src="https://i.pinimg.com/736x/5c/4f/94/5c4f94ae84f7a04f8939c53dff33a0b1.jpg"

                alt={vendor.name}
                className="h-48 w-full object-cover rounded-t-lg cursor-pointer"
                onClick={() => navigate(`/vendor/${vendor._id}`)}
              />

              <div className="p-4">
                <h3 className="font-semibold">{vendor.name}</h3>
                <p className="text-pink-600 font-bold">₹{vendor.price}</p>
                <p className="text-sm">⭐ {vendor.rating}</p>
                <p className="text-xs">{vendor.availability}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}