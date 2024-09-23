import { axiosInstance } from "@/api";

const endpoints = {
  posts: "/posts",
};

export type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

export const fetchPosts = async (signal: AbortSignal): Promise<Post[]> => {
  return await axiosInstance.get(endpoints.posts, {
    signal: signal,
  });
};
