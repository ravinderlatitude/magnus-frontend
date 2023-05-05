import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ResetPwdAPI } from "../../apiServices/services";

const authResetPwdSlice = createSlice({
  name: "authResetPwd",
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
    builder.addCase(ResetPwdAPI.pending, (state) => {
      state.status = "loading";
      state.error = null;
      return state;
    });
    builder.addCase(ResetPwdAPI.fulfilled, (state, action) => {
      console.log(action);
      state.status = "succeeded";
      state.user = action.payload;
      return state;
    });
    builder.addCase(ResetPwdAPI.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      return state;
    });
  },
});

export const { setCredentials, setLogout } = authResetPwdSlice.actions;

export default authResetPwdSlice.reducer;
