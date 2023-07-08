import styled from "styled-components/native";
import { Button } from 'react-native-paper'
import {colors} from '../../../infrastructure/theme/colors'
import { TextInput } from 'react-native-paper'

export const AccountBackGround = styled.ImageBackground`
flex: 1;
align-items: center;
justify-content: center;
`

export const AccountCover = styled.View`
position: absolute;
width: 100%;
height: 100%;
background-color: rgba(255,255,255,0.3);
`

export const AccountContainer = styled.View`
padding: ${props => props.theme.space[4]}
margin-top: ${props => props.theme.space[2]}
background-color:white;
`

export const AuthButton = styled(Button).attrs({
    buttonColor: colors.brand.primary, 
    textColor: 'white', 
})`
padding: ${props => props.theme.space[2]}
`

export const LoginContainer = styled.View`
padding: ${props => props.theme.space[4]}
margin-top: ${props => props.theme.space[2]}
background-color:rgba(255,255,255,0.65);
`

export const LoginInput = styled(TextInput)`
width: 200px;
`