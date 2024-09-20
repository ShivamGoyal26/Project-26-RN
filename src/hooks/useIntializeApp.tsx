import { useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "@/lib/useColorScheme";
import { KEYS } from "@/lib/constants";
import { setAndroidNavigationBar } from "@/lib/android-navigation-bar";

const useIntializeApp = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();

  const loadAppTheme = async () => {
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

  useEffect(() => {
    const promises = [loadAppTheme()];
    Promise.allSettled(promises).then((res) => setIsAppReady(true));
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
