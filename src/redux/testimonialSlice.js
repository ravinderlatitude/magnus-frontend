import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getTetimonialList } from "../../apiServices/services";

export const testimonialSlice = createSlice({
  name: "tetimonialList",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTetimonialList.pending, (state) => {
        state.loading = true;
        return state;
      })
      .addCase(getTetimonialList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        return state;
      })
      .addCase(getTetimonialList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        return state;
      });
  },
});
export default testimonialSlice.reducer;
