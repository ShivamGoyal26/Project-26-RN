import { axiosInstance } from "@/api";

const endpoints = {
  users: "/users",
};

type FetchUserProfilePayload = {
  signal: AbortSignal;
  userId: string;
};

type Profile = {
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export const fetchUserProfile = async (
  payload: FetchUserProfilePayload
): Promise<Profile> => {
  const response = await axiosInstance.get(
    `${endpoints.users}/${payload.userId}`,
    {
      signal: payload.signal,
    }
  );
  return response;
};
