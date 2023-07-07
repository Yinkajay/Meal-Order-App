import React from 'react'
import { AccountBackGround, AccountContainer, AccountCover, AuthButton } from './AccountStyles'
import backgroundImage from '../../../../assets/home_bg.jpg'
import { Spacer } from '../../../components/spacer/Spacer'

export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackGround source={backgroundImage}>
            <AccountCover />
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate('Login')}
                >
                    Login
                </AuthButton>
                <Spacer size='large' />
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate('Register')}
                >
                    Register
                </AuthButton>
            </AccountContainer>
        </AccountBackGround>
    )
}

