import { onlineManager } from "@tanstack/react-query";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Request Interceptor

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (__DEV__) {
    console.log("Calling", config.url);
  }
  if (!onlineManager.isOnline()) {
    throw {
      statusCode: 400,
      message: "Network error, no internet connection",
    };
  }

  return config;
});

// Response Interceptor

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error) => {
    if (axios.isCancel(error)) {
      if (__DEV__) {
        console.log("canceling request");
      }
      return;
    }
    if (error.response.data.message || error.message) {
      throw {
        statusCode: error.response.data.status ?? error.status,
        message: error?.message ?? "something went wrong",
      };
    }
  }
);
