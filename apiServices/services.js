import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://testyourapp.online/magnus-latitude/api",
  //   baseURL: "https://reqres.in/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
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
export const getTetimonialList = async () => {
  return await axiosClient.get("/testimonial-list");
};

// Get Test List
export const getTetsList = async () => {
  return await axiosClient.get("/test-list");
};
