import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import vendorReducer from "./slices/vendorSlice";
import wishlistReducer from "./slices/wishlistSlice";
import bookingReducer from "./slices/bookingSlice";
import addressReducer from "./slices/addressSlice";
import paymentReducer from "./slices/paymentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    vendors: vendorReducer,
    wishlist: wishlistReducer,
    booking: bookingReducer,
    address: addressReducer,
    payment: paymentReducer,
  },
});

export default store;

