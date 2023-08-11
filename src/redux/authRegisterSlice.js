import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { rgisterAPI } from "../../apiServices/services";
import { toast } from "react-toastify";

const authRegisterSlice = createSlice({
  name: "authRegister",
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
    builder.addCase(rgisterAPI.pending, (state) => {
      state.status = "loading";
      state.error = null;
      return state;
    });
    builder.addCase(rgisterAPI.fulfilled, (state, action) => {
      if (action.payload.status != 200) {
        toast.error(action.payload.message);
      } else {
        toast.success(action.payload.message);
      }
      state.status = "succeeded";
      state.user = action.payload;
      return state;
    });
    builder.addCase(rgisterAPI.rejected, (state, action) => {
      toast.error(action.error.message);
      state.status = "failed";
      state.error = action.error.message;
      return state;
    });
  },
});

export const { setCredentials, setLogout } = authRegisterSlice.actions;

export default authRegisterSlice.reducer;
