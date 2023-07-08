import React from 'react'
import backgroundImage from '../../../../assets/home_bg.jpg'
import { AccountBackGround, AccountCover } from './AccountStyles'

export const RegisterScreen = () => {
    return (
        <AccountBackGround source={backgroundImage}>
            <AccountCover /> 
        </AccountBackGround>
    )
}

