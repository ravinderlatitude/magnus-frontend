import { configureStore } from "@reduxjs/toolkit";
import testListSlice from "./createSlice";
import testimonialSlice from "./testimonialSlice";
import authSlice from "./authSlice";
import authRegisterSlice from "./authRegisterSlice";
import authForgotPwdSlice from "./authForgotPwdSlice";
import authResetPwdSlice from "./authResetPwdSlice";
import verifyUserSlice from "./verifyUserSlice";

export default configureStore({
  reducer: {
    testList: testListSlice,
    tetimonialList: testimonialSlice,
    auth: authSlice,
    authRegister: authRegisterSlice,
    authForgotPwd: authForgotPwdSlice,
    authResetPwd: authResetPwdSlice,
    verifyUser: verifyUserSlice,
  },
});
