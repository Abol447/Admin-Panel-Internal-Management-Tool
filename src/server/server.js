import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "",
  headers: {
    apikey: apikey,
    "Content-Type": "application/json",
    withCrrdentials: true,
  },
});
api.interceptors.request.use(
  (config) => {
    const token = "getAccessToken()";
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);
api.interceptors.response.use(
  (response) => {
    toast.success("successfull");
  },
  (error) => {
    toast.error("error");
  }
);
