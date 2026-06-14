import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axiosClient";

export const searchVendors = createAsyncThunk(
  "vendors/search",
  async ({ type, city }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/vendors?type=${type}&city=${city}`);
      return data; // [{_id, name, city, type, price, coverImage, rating}]
    } catch (e) { return thunkAPI.rejectWithValue(e.response?.data || e.message); }
  }
);

const vendorSlice = createSlice({
  name: "vendors",
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(searchVendors.pending, (s)=>{s.loading=true; s.error=null;})
     .addCase(searchVendors.fulfilled,(s,a)=>{s.loading=false; s.list=a.payload;})
     .addCase(searchVendors.rejected,(s,a)=>{s.loading=false; s.error=a.payload;});
  }
});

export default vendorSlice.reducer;