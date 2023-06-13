import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen";


const Stack = createStackNavigator()

export const RestaurantNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
        </Stack.Navigator>
    )
}