import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/RestaurantDetailScreen";


const Stack = createStackNavigator()

export const RestaurantNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.ModalPresentationIOS }}>
            <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
            <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
        </Stack.Navigator>
    )
}