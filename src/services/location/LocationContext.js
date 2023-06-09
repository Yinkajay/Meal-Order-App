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
        if (!searchKeyword.length) { return }
        console.log(searchKeyword)
        locationRequest(searchKeyword.toLowerCase())
            .then(locationTransform)
            .then((result) => {
                setIsLoading(false)
                setLocation(result)
                console.log(result)
            }).catch((err) => {
                setIsLoading(false)
                setError(err)
            })
    }

    // useEffect(() => {
    //     onSearch(keyword)
    // }, [])

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