import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { SettingsScreen } from '../../features/settings/screens/SettingsScreen'
import { FavouritesScreen } from '../../features/settings/screens/FavouritesScreen'

const Stack = createStackNavigator()

export const SettingsNavigator = () => {
    const screenOptions = {
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                options={{ header: () => null }}
                name='Settings'
                component={SettingsScreen}
            />
            <Stack.Screen
                name='Favourites'
                component={FavouritesScreen}
            />
        </Stack.Navigator>
    )
}