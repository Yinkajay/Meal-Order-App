import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from "./RestaurantsNavigator";
import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen";

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
        "tabBarInactiveTintColor": "gray"
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
            <Tab.Screen name="Map" component={RestaurantsScreen} />
            <Tab.Screen name="Settings" component={RestaurantsScreen} />
        </Tab.Navigator>
    )
}