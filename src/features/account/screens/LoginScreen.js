import React, { useContext } from 'react'
import backgroundImage from '../../../../assets/home_bg.jpg'
import { AccountBackGround, LoginContainer, AccountCover, LoginInput, AuthButton, ErrorContainer } from './AccountStyles'
import { Spacer } from '../../../components/spacer/Spacer'
import { useState } from 'react'
import { AuthContext } from '../../../services/authentication/AuthenticationContext'
import { Text } from '../../../components/typography/TextComponent'
import { Title } from 'react-native-paper'

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { onLogin, error } = useContext(AuthContext)

    if (error) {
        console.log(error)
    }
    return (
        <AccountBackGround source={backgroundImage}>
            <AccountCover />
            <Title>Meals To Go</Title>
            <LoginContainer>
                <LoginInput label="E-mail" value={email} onChangeText={(email) => setEmail(email)} textContentType='emailAddress' />
                <Spacer size="large" />
                <LoginInput label="Password" value={password} onChangeText={(password) => setPassword(password)} secureTextEntry />
                <Spacer size="large" />
                <Spacer size='large'>
                    <ErrorContainer>
                        <Text variant='error'>
                            {error && error['message']}
                        </Text>
                    </ErrorContainer>
                </Spacer>
                <Spacer size='large' />
                <AuthButton textContentType={password} onPress={() => onLogin(email, password)}>
                    Login
                </AuthButton>
            </LoginContainer>
            <Spacer size='large'>
                <AuthButton mode='contained' onPress={() => navigation.goBack()}>
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackGround>
    )
}

