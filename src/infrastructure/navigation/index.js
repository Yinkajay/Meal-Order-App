import React, { useContext } from "react";
import { AppNavigator } from "./AppNavigator";
import { AuthContext } from "../../services/authentication/AuthenticationContext";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./AccountNavigator";


export const Navigator = () => {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <NavigationContainer>
            {
                isAuthenticated
                    ? <AppNavigator />
                    : <AccountNavigator/>}
        </NavigationContainer>
    )
}