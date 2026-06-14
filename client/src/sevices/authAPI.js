import axios from "axios";
import { setUser, setLoading } from "../redux/authSlice";

const API = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
});

export const login = (email, password, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const res = await API.post("/users/login", {
        email,
        password,
      });

      const user = res.data.user;

      // Save user in Redux
      dispatch(setUser(user));

      // Save to localStorage (persist login)
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    } finally {
      dispatch(setLoading(false));
    }
  };
};