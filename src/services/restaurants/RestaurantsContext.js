import React, { createContext, useEffect, useState } from "react"
import { restaurantsRequest, transformRestaurants } from "./RestaurantsService"

export const RestaurantsContext = createContext({})

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const retrieveRestaurants = () => {
        setIsLoading(true)
        setTimeout(() => {
            restaurantsRequest()
                .then(transformRestaurants)
                .then((results) => {
                    setIsLoading(false)
                    setRestaurants(results)
                })
                .catch(err => {
                    setIsLoading(false)
                    setError(err)
                })
        }, 2000)
    }

    useEffect(() => {
        retrieveRestaurants()
    }, [])

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