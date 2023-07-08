import React, { useState } from "react";
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
import { FavouritesContextProvider } from "./src/services/favourites/FavouritesContext";
import { AuthenticationContextProvider } from "./src/services/authentication/AuthenticationContext";
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
  apiKey: "AIzaSyALLGFCkH0cPx0EhdLfiuYh_ZI99wyZddo",
  authDomain: "mealstogo-a80c2.firebaseapp.com",
  projectId: "mealstogo-a80c2",
  storageBucket: "mealstogo-a80c2.appspot.com",
  messagingSenderId: "948317478509",
  appId: "1:948317478509:web:2763733c4504eedfd26964"
};

export const fireapp = initializeApp(firebaseConfig)

console.log(fireapp)

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
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigator />
                <ExpoStatusBar />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider >
    </>
  );
}


