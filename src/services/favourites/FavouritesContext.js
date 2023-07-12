import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { AuthContext } from "../authentication/AuthenticationContext";

export const FavouritesContext = createContext()

export const FavouritesContextProvider = ({ children }) => {
    const [favouriteRestaurants, setFavouriteRestaurants] = useState([])
    const { user } = useContext(AuthContext)

    const addFavourite = (restaurant) => {
        setFavouriteRestaurants([...favouriteRestaurants, restaurant])
    }

    const removeFavourite = (restaurant) => {
        const newFavourites = favouriteRestaurants.filter((fav) => fav.placeId !== restaurant.placeId)
        setFavouriteRestaurants(newFavourites)
    }

    const storeFavourites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
        } catch (e) {
            console.log('error storing', e)
        }
    };

    const getFavourites = async (uid) => {
        try {
            const value = await AsyncStorage.getItem(`@favourites-${uid}`);
            if (value !== null) {
                setFavouriteRestaurants(JSON.parse(value))
            }
        } catch (e) {
            console.log('error loading', e)
        }
    };

    useEffect(() => {
        if (user) getFavourites(user.uid)
    }, [user])

    useEffect(() => {
        if (user) storeFavourites(favouriteRestaurants, user.uid)
    }, [favouriteRestaurants, user])

    return (
        <FavouritesContext.Provider
            value={{
                favouriteRestaurants,
                addFavourite,
                removeFavourite
            }}
        >
            {children}
        </FavouritesContext.Provider>
    )
}