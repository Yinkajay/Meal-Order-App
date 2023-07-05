import React, { createContext, useState } from "react";

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