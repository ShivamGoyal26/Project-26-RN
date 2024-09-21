import { useRouter } from "expo-router";

// Files
import { queryClient } from "@/app/_layout";
import routes from "@/routes";
import { useAuthStore } from "@/store/useAuthStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useLogout = () => {
  const router = useRouter();
  const reset = useAuthStore((state) => state.reset);

  const logout = () => {
    AsyncStorage.clear();
    queryClient.cancelQueries();
    queryClient.clear();
    reset();
    router.replace(routes.LOGIN);
  };

  return logout;
};

export default useLogout;
