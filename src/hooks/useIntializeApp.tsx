import { useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "@/lib/useColorScheme";
import { KEYS } from "@/lib/constants";
import { setAndroidNavigationBar } from "@/lib/android-navigation-bar";
import { useRouter } from "expo-router";
import routes from "@/routes";
import { useAuthStore } from "@/store/useAuthStore";

const useIntializeApp = () => {
  const router = useRouter();
  const [isAppReady, setIsAppReady] = useState(false);
  const setUserId = useAuthStore((state) => state.setUserId);
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();

  const loadAppTheme = () => {
    return new Promise(async (resolve, reject) => {
      const theme = await AsyncStorage.getItem(KEYS.APP_THEME);
      if (!theme) {
        AsyncStorage.setItem("theme", colorScheme);
        resolve("theme loaded");
      }
      const colorTheme = theme === "dark" ? "dark" : "light";
      if (theme !== colorScheme) {
        setColorScheme(colorTheme);
        setAndroidNavigationBar(colorTheme);
        resolve("theme loaded");
      }
      setAndroidNavigationBar(colorTheme);
      resolve("theme loaded");
    });
  };

  const getUserSession = () => {
    return new Promise(async (resolve, reject) => {
      const userId = await AsyncStorage.getItem(KEYS.USER_ID);
      if (userId) {
        resolve(userId);
      }
      resolve(null);
    });
  };

  useEffect(() => {
    const promises = [loadAppTheme(), getUserSession()];
    Promise.allSettled(promises).then((res) => {
      setIsAppReady(true);
      setTimeout(() => {
        if (res[1].value) {
          setUserId(res[1].value);
          router.replace(routes.HOME);
        }
      }, 300);
    });
  }, []);

  useEffect(() => {
    if (isAppReady) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 1000);
    }
  }, [isAppReady]);

  return {
    isAppReady,
    isDarkColorScheme,
  };
};

export default useIntializeApp;
