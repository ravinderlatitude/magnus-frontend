import { configureStore } from "@reduxjs/toolkit";
import testListSlice from "./createSlice";
import testimonialSlice from "./testimonialSlice";
import authSlice, { setCredentials } from "./authSlice";
import authRegisterSlice from "./authRegisterSlice";
import authForgotPwdSlice from "./authForgotPwdSlice";
import authResetPwdSlice from "./authResetPwdSlice";
import verifyUserSlice from "./verifyUserSlice";
import contactSlice from "./contactSlice";
import { axiosClient } from "../../apiServices/services";

const store = configureStore({
  reducer: {
    testList: testListSlice,
    tetimonialList: testimonialSlice,
    auth: authSlice,
    authRegister: authRegisterSlice,
    authForgotPwd: authForgotPwdSlice,
    authResetPwd: authResetPwdSlice,
    verifyUser: verifyUserSlice,
    contact: contactSlice,
  },
});
export default store;

axiosClient.interceptors.response.use(
  function (response) {
    console.log("response", response.data);
    if (response?.data?.status == 401) {
      localStorage.removeItem("userData");
      store.dispatch(setCredentials(null));
    }
    return response.data;
  },
  function (error) {
    // let res = error.response;
    // if (res.status == 401) {
    //   window.location.href = "/";
    // }
    // console.log(error);
    //   console.error(“Looks like there was a problem. Status Code: “ + res.status);
    return Promise.reject(error);
  }
);
