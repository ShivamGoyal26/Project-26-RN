import { useState, useEffect, useCallback, useRef } from "react";
import * as Location from "expo-location";
import { Alert, AppState, Linking } from "react-native";

const useGetCurrentLocation = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [locationName, setLocationName] = useState<string | null>(null);
  const appState = useRef(AppState.currentState); // Track the current app state

  const getCurrentLocation = useCallback(async () => {
    console.log("getCurrentLocation");
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Location Denied",
        "Permission to access location was denied",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => Linking.openSettings() },
        ]
      );
      return;
    }

    // Get current location
    let currentLocation = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = currentLocation.coords;
    setLocation({ latitude, longitude });

    // Reverse geocode to get location name
    let reverseGeocode = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    // Extract relevant address information
    if (reverseGeocode.length > 0) {
      const { city, region, country, street } = reverseGeocode[0];
      setLocationName(`${street}, ${city}, ${region}, ${country}`);
    }
  }, []);

  useEffect(() => {
    // Initially fetch location when the component mounts
    getCurrentLocation();

    // AppState listener to detect when the app becomes active
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      // If the app is transitioning from background or inactive to active
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        // Refetch the location when the app comes back to foreground
        getCurrentLocation();
      }
      appState.current = nextAppState;
    });

    return () => {
      // Clean up the AppState listener on component unmount
      subscription.remove();
    };
  }, []);

  return {
    location,
    locationName,
    getCurrentLocation,
  };
};

export default useGetCurrentLocation;
