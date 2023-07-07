import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { LoginScreen } from '../../features/account/screens/LoginScreen'
import { AccountScreen } from '../../features/account/screens/AccountScreen'
import { RegisterScreen } from '../../features/account/screens/RegisterScreen'


const Stack = createStackNavigator()

export const AccountNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Main' component={AccountScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
    )
}

