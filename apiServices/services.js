import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// let headers = "";

// if (typeof window !== "undefined" && localStorage.getItem("userData")) {
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   headers = {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + userData.data.token,
//   };
// } else {
//   headers = {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   };
// }

export const axiosClient = axios.create({
  // baseURL: "https://testyourapp.online/magnus-latitude/api",
  // baseURL: "https://api.magnuslatitude.com/api",
  // baseURL: "https://reqres.in/api",
  baseURL: process.env.BASE_LIVE_URL,
  headers: { "Content-Type": "application/json" },
  transformRequest: [
    function (data, headers) {
      if (typeof window !== "undefined" && localStorage.getItem("userData")) {
        const userData = JSON.parse(localStorage.getItem("userData"));
        headers.Authorization = `Bearer ${userData?.data?.token}`;
      }
      if (data && data._parts) {
        return data;
      } else {
        return JSON.stringify(data);
      }
    },
  ],
});

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
export const getTetsLists = async () => {
  return await axiosClient.get("/test-list");
};

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
    localStorage.setItem("userData", JSON.stringify(response));
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

//post Payment API
export const PaymentAPI = async (body) => {
  return await axiosClient.post("/razorpay-payment/capture", body);
};

//post Payment PayGAPI
// export const PaymentPayGAPI = async (body) => {
//   return await axiosClient.post("/payg-payment", body);
// };

export const PaymentPayGAPI = async (body) => {
  const response = await axiosClient.post("/payg-payment", body);
  localStorage.setItem("PaygData", JSON.stringify(response));
  return response;
};

export const PaymentDetailPayGAPI = async (body) => {
  const response = await axiosClient.post("/payg-detail", body);
  return response;
};
