import { createContext, useRef, useState } from "react";
import { loginRequest } from './AuthenticationService'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    // const auth = useRef(getAuth()).current
    const auth = getAuth()

    const onLogin = (email, password) => {
        setIsLoading(true)
        loginRequest(auth, email, password).then((u) => {
            setUser(u)
            setIsLoading(false)
        }
        ).catch((err) => {
            console.log(err)
            setIsLoading(false)
            setError(err)
        })
    }

    const onRegister = (email, password, repeatedPassword) => {
        if (password !== repeatedPassword) {
            setError("Error: Passwords don't match")
        }
        createUserWithEmailAndPassword(auth, email, password).then((u) => {
            setUser(u)
            setIsLoading(false)
        }
        ).catch((err) => {
            console.log(err)
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
                isAuthenticated: !!user,
                onRegister
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}