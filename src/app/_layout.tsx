import "../../global.css";

import { Theme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import NetInfo from "@react-native-community/netinfo";
import { onlineManager } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PortalHost } from "@rn-primitives/portal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Files
import { NAV_THEME } from "../lib/constants";
import useIntializeApp from "@/hooks/useIntializeApp";

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};

export const queryClient = new QueryClient();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(!!state.isConnected);
  });
});

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { isDarkColorScheme, isAppReady } = useIntializeApp();

  if (!isAppReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <SafeAreaView
              edges={["top"]}
              style={{
                flex: 1,
                backgroundColor: isDarkColorScheme
                  ? DARK_THEME.colors.background
                  : LIGHT_THEME.colors.background,
              }}
            >
              <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
              {/* <Stack.Screen
              name="index"
              options={{
                title: "Starter Base",
                headerRight: () => <ThemeToggle />,
              }}
            /> */}
              <Stack screenOptions={{ headerShown: false }} />
              <PortalHost />
            </SafeAreaView>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
