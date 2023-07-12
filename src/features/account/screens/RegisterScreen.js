import React, { useContext } from 'react'
import backgroundImage from '../../../../assets/home_bg.jpg'
import { AccountBackGround, LoginContainer, AccountCover, LoginInput, AuthButton, ErrorContainer } from './AccountStyles'
import { Spacer } from '../../../components/spacer/Spacer'
import { useState } from 'react'
import { AuthContext } from '../../../services/authentication/AuthenticationContext'
import { Text } from '../../../components/typography/TextComponent'
import { ActivityIndicator, Title } from 'react-native-paper'

export const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')

    const { onRegister, isLoading, error } = useContext(AuthContext)

    if (error) {
        console.log(error)
    }
    return (
        <AccountBackGround source={backgroundImage}>
            <AccountCover />
            <Title>Meals To Go</Title>
            <LoginContainer>
                <LoginInput label="E-mail" value={email} onChangeText={(e) => setEmail(e)} textContentType='emailAddress' />
                <Spacer size="large" />
                <LoginInput label="Password" value={password} onChangeText={(p) => setPassword(p)} secureTextEntry />
                <Spacer size="large" />
                <LoginInput label="RepeatedPassword" value={repeatedPassword} onChangeText={(p) => setRepeatedPassword(p)} secureTextEntry />
                <Spacer size="large" />
                <Spacer size='large'>
                    <ErrorContainer>
                        <Text variant='error'>
                            {error && error['message']}
                        </Text>
                    </ErrorContainer>
                </Spacer>
                <Spacer size='large' />
                {isLoading
                    ? <ActivityIndicator />
                    : (
                        <AuthButton icon='mail' textContentType={password} onPress={() => onRegister(email, password, repeatedPassword)}>
                            Register
                        </AuthButton>
                    )
                }
            </LoginContainer>
            <Spacer size='large'>
                <AuthButton mode='contained' onPress={() => navigation.goBack()}>
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackGround>
    )
}

