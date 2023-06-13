import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from "./RestaurantsNavigator";
import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen";
import { MapScreen } from "../../features/maps/screens/MapScreen";

const Tab = createBottomTabNavigator()

const TAB_ICON = {
    Restaurants: "fast-food",
    Map: "map-sharp",
    Settings: "settings-sharp",
};

const screenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name]
    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
        "tabBarActiveTintColor": "tomato",
        "tabBarInactiveTintColor": "gray",
        headerShown: false
    }
}

export const AppNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={
                screenOptions
            }
        >
            <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={RestaurantsScreen} />
        </Tab.Navigator>
    )
}