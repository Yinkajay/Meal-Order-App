import React, { createContext, useContext, useEffect, useState } from "react"
import { restaurantsRequest, transformRestaurants } from "./RestaurantsService"
import { LocationContext } from "../location/LocationContext"

export const RestaurantsContext = createContext({})

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const { location } = useContext(LocationContext)

    const retrieveRestaurants = (locString) => {
        setIsLoading(true)
        setRestaurants([])
        setTimeout(() => {
            restaurantsRequest(locString)
                .then(transformRestaurants)
                .then((results) => {
                    setIsLoading(false)
                    setRestaurants(results)
                })
                .catch(err => {
                    setIsLoading(false)
                    setError(err)
                    console.log(err)
                })
        }, 2000)
    }

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`
            retrieveRestaurants(locationString)
        }
    }, [location])

    return (
        <RestaurantsContext.Provider value={{
            restaurants,
            isLoading,
            error
        }}>
            {children}
        </RestaurantsContext.Provider >
    )
}