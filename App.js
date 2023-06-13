import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular
} from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/RestaurantsContext";
import { LocationContextProvider } from "./src/services/location/LocationContext";
import { AppNavigator } from "./src/infrastructure/navigation/AppNavigator";
import { Navigator } from "./src/infrastructure/navigation";


export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });
  const [latoLoaded] = useLato({
    Lato_400Regular
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Navigator />
            </NavigationContainer>
            <ExpoStatusBar />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider >
    </>
  );
}


