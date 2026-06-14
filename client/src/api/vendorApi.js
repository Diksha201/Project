import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api/vendors",
});

export const fetchCities = () => API.get("/cities");
export const searchVendors = (service, city) =>
  API.get(`/search?service=${service}&city=${city}`);