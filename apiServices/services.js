import authSlice from "@/redux/authSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let headers = "";
if (
  typeof window !== "undefined" &&
  localStorage.getItem("authToken") != null &&
  localStorage.getItem("authToken") != undefined
) {
  headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("authToken"),
  };
} else {
  headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}

const axiosClient = axios.create({
  baseURL: "https://testyourapp.online/magnus-latitude/api",
  //   baseURL: "https://reqres.in/api",
  headers: headers,
});

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // let res = error.response;
    // if (res.status == 401) {
    //   window.location.href = "/";
    // }
    console.log(error);
    //   console.error(“Looks like there was a problem. Status Code: “ + res.status);
    return Promise.reject(error);
  }
);

// Get Faq List
export const getFaqList = async () => {
  return await axiosClient.get("/faq-list");
};

// Get Testimonial
export const getTetimonialList = createAsyncThunk(
  "testimonial/getTetimonialList",
  async () => {
    return await axiosClient.get("/testimonial-list");
  }
);

// Get Test List
// export const getTetsList = async () => {
//   return await axiosClient.get("/test-list");
// };

export const getTetsList = createAsyncThunk(
  "testList/getTetsList",
  async () => {
    return await axiosClient.get("/test-list");
  }
);

//post Call Login API

export const loginAPI = createAsyncThunk("auth/login", async (body) => {
  const response = await axiosClient.post("/login", body);
  localStorage.setItem("userData", JSON.stringify(response));
  return response;
});

//post Call verify-user API
export const VerifyUserAPI = createAsyncThunk(
  "auth/verify-user",
  async (body) => {
    const response = await axiosClient.post("/verify-user", body);
    return response;
  }
);

//post Call Register API

export const rgisterAPI = createAsyncThunk("auth/register", async (body) => {
  const response = await axiosClient.post("/register", body);
  return response;
});

//post Call Forgot API
export const forgotPwdAPI = createAsyncThunk(
  "auth/forgot-password",
  async (body) => {
    const response = await axiosClient.post("/forgot-password", body);
    return response;
  }
);

//post Call Forgot API
export const ResetPwdAPI = createAsyncThunk(
  "auth/reset-password",
  async (body) => {
    const response = await axiosClient.post("/reset-password", body);
    return response;
  }
);

//post Call contact-us API
export const ContacUsAPI = createAsyncThunk("auth/contact-us", async (body) => {
  const response = await axiosClient.post("/contact-us", body);
  return response;
});

// Get Test List Detail
export const getTetsListDetail = async (id) => {
  return await axiosClient.get(`/test-detail/${id}`);
};
