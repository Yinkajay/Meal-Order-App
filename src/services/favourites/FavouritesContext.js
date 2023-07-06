import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const FavouritesContext = createContext()

export const FavouritesContextProvider = ({ children }) => {
    const [favouriteRestaurants, setFavouriteRestaurants] = useState([])

    const addFavourite = (restaurant) => {
        setFavouriteRestaurants([...favouriteRestaurants, restaurant])
    }

    const removeFavourite = (restaurant) => {
        const newFavourites = favouriteRestaurants.filter((fav) => fav.placeId !== restaurant.placeId)
        setFavouriteRestaurants(newFavourites)
    }

    const storeFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@favourites', jsonValue);
        } catch (e) {
            console.log('error storing', e)
        }
    };

    const getFavourites = async () => {
        try {
            const value = await AsyncStorage.getItem('@favourites');
            if (value !== null) {
                setFavouriteRestaurants(JSON.parse(value))
            }
        } catch (e) {
            console.log('error loading', e)
        }
    };

    useEffect(() => {
        getFavourites()
    }, [])

    useEffect(() => {
        storeFavourites(favouriteRestaurants)
    }, [favouriteRestaurants])

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