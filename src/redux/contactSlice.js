import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ContacUsAPI } from "../../apiServices/services";
import { toast } from "react-toastify";
export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle login action
    builder.addCase(ContacUsAPI.pending, (state) => {
      state.status = "loading";
      state.error = null;
      return state;
    });
    builder.addCase(ContacUsAPI.fulfilled, (state, action) => {
      // console.log(action);
      if (action.payload.status != 200) {
        toast.error(action.payload.message);
      } else {
        toast.success(action.payload.message);
      }
      state.status = "succeeded";
      state.user = action.payload;
      return state;
    });
    builder.addCase(ContacUsAPI.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      return state;
    });
  },
});

export default contactSlice.reducer;

// module.exports = {
//   contactSlice: contactSlice.reducer,
//   tetimonialListSlice: tetimonialListSlice.reducer,
// };
