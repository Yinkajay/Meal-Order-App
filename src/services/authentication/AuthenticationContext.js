import { createContext, useRef, useState } from "react";
import { loginRequest } from './AuthenticationService'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const auth = getAuth()


    onAuthStateChanged(auth, (usr) => {
        if (usr) {
            setUser(user)
            setIsLoading(false)
        }
        else {
            setIsLoading(false)
        }
    })

    const onLogin = (email, password) => {
        setIsLoading(true)
        loginRequest(auth, email, password).then((u) => {
            setUser(u.user)
            setIsLoading(false)
        }
        ).catch((err) => {
            console.log(err)
            setIsLoading(false)
            setError(err)
        })
    }

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true)
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

    const onLogout = () => {
        setUser(null)
        signOut(auth).then(() => {
            console.log('signed out')
        }).catct(err => {
            console.log('ERROR IS: ', err)
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
                onRegister,
                onLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}