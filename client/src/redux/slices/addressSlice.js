import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axiosClient";

export const saveAddress = createAsyncThunk("address/save", async (payload, thunkAPI)=>{
  try { const { data } = await axios.post("/address", payload); return data; }
  catch (e){ return thunkAPI.rejectWithValue(e.response?.data || e.message); }
});

const addressSlice = createSlice({
  name: "address",
  initialState: { list: [], loading: false, error: null },
  reducers:{},
  extraReducers:(b)=>{
    b.addCase(saveAddress.fulfilled,(s,a)=>{ s.list = a.payload.addresses; });
  }
});
export default addressSlice.reducer;