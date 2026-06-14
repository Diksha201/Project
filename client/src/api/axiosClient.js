import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("vv_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;