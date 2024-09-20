import { axiosInstance } from "@/api";
import axios from "axios";

const endpoints = {
  login: "/users",
};

type LoginPayload = {
  username: string;
  password: string;
};

export const login = async (payload: LoginPayload) => {
  return await axiosInstance.post(endpoints.login, payload);
};

type FetchUserPayload = {
  signal: AbortSignal;
  id: string;
};

export const fetchUser = async (payload: FetchUserPayload) => {
  const response = await axiosInstance.get(`${endpoints.login}/${payload.id}`, {
    signal: payload.signal,
  });
  return response;
};
