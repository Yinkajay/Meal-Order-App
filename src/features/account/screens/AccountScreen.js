import React from 'react'
import { AccountBackGround, AccountContainer, AccountCover, AnimationWrapper, AuthButton, Title } from './AccountStyles'
import backgroundImage from '../../../../assets/home_bg.jpg'
import { Spacer } from '../../../components/spacer/Spacer'
import AnimatedLottieView from 'lottie-react-native'

export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackGround source={backgroundImage}>
            <AccountCover />
            <AnimationWrapper>
                <AnimatedLottieView
                    key='animation'
                    autoPlay
                    loop
                    resizeMode='cover'

                    source={require('../../../../assets/watermelon.json')}
                />
            </AnimationWrapper>
            <Title>Meals To Go</Title>
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

