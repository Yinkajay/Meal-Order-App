import React, { useContext } from 'react'
import backgroundImage from '../../../../assets/home_bg.jpg'
import { AccountBackGround, LoginContainer, AccountCover, LoginInput, AuthButton } from './AccountStyles'
import { Spacer } from '../../../components/spacer/Spacer'
import { useState } from 'react'
import { AuthContext } from '../../../services/authentication/AuthenticationContext'
import { Text } from '../../../components/typography/TextComponent'

export const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { onLogin, error } = useContext(AuthContext)

    if (error) {
        console.log(error)
        console.log(typeof (error))
    }
    return (
        <AccountBackGround source={backgroundImage}>
            <AccountCover />
            <LoginContainer>
                <LoginInput label="E-mail" value={email} onChangeText={(email) => setEmail(email)} textContentType='emailAddress' />
                <Spacer size="large" />
                <LoginInput label="Password" value={password} onChangeText={(password) => setPassword(password)} secureTextEntry />
                <Spacer size="large" />
                <Spacer size='large'>
                    <Text variant='error'>
                        {/* {error && error.message
                        } */}
{error && error[0]}
                    </Text>
                </Spacer>
                <Spacer size='large' />
                <AuthButton textContentType={password} onPress={() => onLogin(email, password)}>
                    Login
                </AuthButton>
            </LoginContainer>
        </AccountBackGround>
    )
}

