import { TextInput } from 'react-native-paper'
import backgroundImage from '../../../../assets/home_bg.jpg'
import { AccountBackGround, LoginContainer, AccountCover } from './AccountStyles'
import { Spacer } from '../../../components/spacer/Spacer'

export const LoginScreen = () => {
    return (
        <AccountBackGround source={backgroundImage}>
            <AccountCover /> 
            <LoginContainer>
                <TextInput></TextInput>
                <Spacer />
                <TextInput></TextInput>
            </LoginContainer>
        </AccountBackGround>
    )
}

