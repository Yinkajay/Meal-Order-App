import { createContext, useState } from "react";
import { loginRequest } from './AuthenticationService'

export const AuthContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const onLogin = (email, password) => {
        setIsLoading(true)
        loginRequest(email, password).then((u) => {
            setUser(u)
            setIsLoading(false)
        }
        ).catch((err) => {
            setIsLoading(false)
            setError(err)
        })
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin,
                isAuthenticated: !!user
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}