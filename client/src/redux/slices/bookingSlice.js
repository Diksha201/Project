import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    current: null,
    bookings: [],
  },
  reducers: {
    createBooking: (state, action) => {
      state.bookings.push(action.payload);
      state.current = null;
    },
    setCurrentBooking: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { createBooking, setCurrentBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
