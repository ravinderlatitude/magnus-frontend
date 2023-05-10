import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { VerifyUserAPI } from "../../apiServices/services";

const verifyUserSlice = createSlice({
  name: "verifyUser",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setCredentials: (state, { payload }) => {
      state.user = payload;
    },
    setLogout: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {
    // Handle login action
    builder.addCase(VerifyUserAPI.pending, (state) => {
      state.status = "loading";
      state.error = null;
      return state;
    });
    builder.addCase(VerifyUserAPI.fulfilled, (state, action) => {
      console.log(action);
      state.status = "succeeded";
      state.user = action.payload;
      return state;
    });
    builder.addCase(VerifyUserAPI.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      return state;
    });
  },
});

export const { setCredentials, setLogout } = verifyUserSlice.actions;

export default verifyUserSlice.reducer;
