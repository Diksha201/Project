import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axiosClient";

export const createOrder = createAsyncThunk("payment/createOrder", async ({ amount }, thunkAPI) => {
  try {
    const { data } = await axios.post("/payments/create-order", { amount });
    return data; // { orderId, amount, currency }
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response?.data || e.message);
  }
});

const paymentSlice = createSlice({
  name: "payment",
  initialState: { order: null, loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(createOrder.pending, (s)=>{s.loading=true;})
     .addCase(createOrder.fulfilled, (s,a)=>{s.loading=false; s.order=a.payload;})
     .addCase(createOrder.rejected, (s,a)=>{s.loading=false; s.error=a.payload;});
  }
});

export default paymentSlice.reducer;