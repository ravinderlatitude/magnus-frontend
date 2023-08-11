import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ResetPwdAPI } from "../../apiServices/services";
import { toast } from "react-toastify";

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
    resetResetPwd: (state) => {
      state = {
        user: null,
        status: "idle",
        error: null,
      };
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
    builder.addCase(ResetPwdAPI.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      return state;
    });
  },
});

export const { setCredentials, setLogout, resetResetPwd } =
  authResetPwdSlice.actions;

export default authResetPwdSlice.reducer;
