import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api",
});

// ✅ CREATE BOOKING
export const createBooking = (data) => {
  return API.post("/bookings", data);
};

// ✅ GET USER BOOKINGS
export const getUserBookings = (userId) => {
  return API.get(`/bookings/user/${userId}`);
};