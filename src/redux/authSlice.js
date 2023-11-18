import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loginAPI } from "../../apiServices/services";
import { toast } from "react-toastify";

const authSlice = createSlice({
  name: "auth",
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
    builder.addCase(loginAPI.pending, (state) => {
      state.status = "loading";
      state.error = null;
      return state;
    });
    builder.addCase(loginAPI.fulfilled, (state, action) => {
      state.status = "succeeded";
      if (action.payload.status != 200) {
        toast.error(action.payload.message);
      } else {
        toast.success(action.payload.message);
        localStorage.setItem("userData", JSON.stringify(action.payload));
      }
      state.user = action.payload;
      return state;
    });
    builder.addCase(loginAPI.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      return state;
    });
  },
});

export const { setCredentials, setLogout } = authSlice.actions;

export default authSlice.reducer;
