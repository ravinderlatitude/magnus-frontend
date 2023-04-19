import { configureStore } from "@reduxjs/toolkit";
import testListSlice from "./createSlice";
import testimonialSlice from "./testimonialSlice";
import authSlice from "./authSlice";

export default configureStore({
  reducer: {
    testList: testListSlice,
    tetimonialList: testimonialSlice,
    auth: authSlice,
  },
});
