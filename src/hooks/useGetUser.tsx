import { queryClient } from "@/app/_layout";
import { fetchUser } from "@/containers/auth/login/services/login.service";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useGetUser = (userId: string) => {
  const queryKey: QueryKey = ["user", userId];
  const query = useQuery({
    queryKey: queryKey,
    staleTime: Infinity,
    enabled: !!userId,
    queryFn: ({ signal }) => fetchUser({ signal: signal, id: userId }),
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

export default useGetUser;
