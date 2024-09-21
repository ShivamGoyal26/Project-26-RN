import { queryClient } from "@/app/_layout";
import { fetchUser } from "@/containers/auth/login/services/login.service";
import { fetchPosts } from "@/services/posts.service";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useGetCategories = () => {
  const queryKey: QueryKey = ["categories"];
  const query = useQuery({
    queryKey: queryKey,
    staleTime: Infinity,
    enabled: true,
    queryFn: ({ signal }) => fetchPosts(signal),
  });

  useEffect(() => {
    return () => {
      if (!query.isFetching) {
        queryClient.cancelQueries({ queryKey });
      }
    };
  }, []);

  return query;
};

export default useGetCategories;
