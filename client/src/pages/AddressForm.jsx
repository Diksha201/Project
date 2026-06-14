import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBooking } from "../redux/slices/bookingSlice";
import { useState } from "react";

export default function AddressForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { current } = useSelector((s) => s.booking);

  const [address, setAddress] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!current) {
    alert("No booking selected");
    return;
  }

  dispatch(createBooking({
    ...current,
    address
  }));

  navigate("/checkout");
};

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Enter Address</h2>

      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full border p-2"
        required
      />

      <button
        className="mt-4 w-full bg-pink-700 text-white py-2 rounded"
      >
        Continue
      </button>
    </form>
  );
}