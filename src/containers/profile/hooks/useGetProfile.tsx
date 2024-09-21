import { QueryKey, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

// Files
import { queryClient } from "@/app/_layout";
import { fetchUserProfile } from "../services/profile.service";

const useGetProfile = (userId: string) => {
  const queryKey: QueryKey = ["profile", userId];
  const query = useQuery({
    queryKey: queryKey,
    staleTime: Infinity,
    enabled: true,
    queryFn: ({ signal }) =>
      fetchUserProfile({ signal: signal, userId: userId }),
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

export default useGetProfile;
