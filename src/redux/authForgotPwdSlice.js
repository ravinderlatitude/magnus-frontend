import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { forgotPwdAPI } from "../../apiServices/services";

const authForgotPwdSlice = createSlice({
  name: "authForgotPwd",
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
    builder.addCase(forgotPwdAPI.pending, (state) => {
      state.status = "loading";
      state.error = null;
      return state;
    });
    builder.addCase(forgotPwdAPI.fulfilled, (state, action) => {
      // console.log(action);
      state.status = "succeeded";
      state.user = action.payload;
      return state;
    });
    builder.addCase(forgotPwdAPI.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      return state;
    });
  },
});

export const { setCredentials, setLogout } = authForgotPwdSlice.actions;

export default authForgotPwdSlice.reducer;
