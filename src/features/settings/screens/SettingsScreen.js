import React, { useContext } from 'react'
import { SafeArea } from '../../../components/utility/SafeAreaComponent'
import { AuthContext } from '../../../services/authentication/AuthenticationContext'
import { List, Avatar } from 'react-native-paper'
import styled from 'styled-components/native'
import { colors } from '../../../infrastructure/theme/colors'
import { Text } from '../../../components/typography/TextComponent'
import { Spacer } from '../../../components/spacer/Spacer'


const SettingsItem = styled(List.Item)`
padding: ${props => props.theme.space[3]}
`

const AvatarContainer = styled.View`
align-items: center
`

export const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthContext)
    console.log(user)
    console.log(user.email)
    return (
        <SafeArea>
            <AvatarContainer>
                <Avatar.Icon size={140} icon="human" backgroundColor='#2182BD' />
            {user && (
                <Spacer position='top' size='large'>
                    <Text variant="label">{user.email}</Text>
                </Spacer>
            )}
            </AvatarContainer>
            <List.Section>
                <SettingsItem
                    title='Favourites'
                    description="View your favourites"
                    left={(props) => (
                        <List.Icon {...props} color={colors.ui.error} icon="heart" />
                    )}

                    onPress={() => navigation.navigate('Favourites')}
                />
                <SettingsItem
                    title='Logout'
                    onPress={onLogout}
                    left={(props) => (
                        <List.Icon {...props} color={colors.ui.secondary} icon="door" />
                    )}
                />
            </List.Section>
        </SafeArea>
    )
}

