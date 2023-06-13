import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./LocationService";

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [location, setLocation] = useState([])
    const [keyword, setKeyword] = useState("San francisco")

    const onSearch = (searchKeyword) => {
        setIsLoading(true)
        setKeyword(searchKeyword)
    }

    useEffect(() => {
        if (!keyword.length) { return }
        locationRequest(keyword.trim().toLowerCase())
            .then(locationTransform)
            .then((result) => {
                setIsLoading(false)
                setLocation(result)
                // console.log(result)
            }).catch((err) => {
                setIsLoading(false)
                setError(err)
            })
    }, [keyword])

    return <LocationContext.Provider value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword
    }}>
        {children}
    </LocationContext.Provider>
}