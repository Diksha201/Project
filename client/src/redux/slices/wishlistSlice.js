import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axiosClient";

export const addToWishlist = createAsyncThunk("wishlist/add", async (vendorId, thunkAPI) => {
  try { const { data } = await axios.post("/wishlist", { vendorId }); return data; }
  catch (e) { return thunkAPI.rejectWithValue(e.response?.data || e.message); }
});

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { items: [] },
  reducers: {},
  extraReducers: (b)=>{
    b.addCase(addToWishlist.fulfilled, (s,a)=>{ s.items = a.payload.items; });
  }
});
export default wishlistSlice.reducer;