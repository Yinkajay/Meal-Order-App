import React, { useContext } from 'react'
import { FavouritesContext } from '../../../services/favourites/FavouritesContext'
import { SafeArea } from '../../../components/utility/SafeAreaComponent'
import styled from 'styled-components/native'
import { Text } from '../../../components/typography/TextComponent'
import { RestaurantList } from '../../restaurants/components/RestaurantListStyles'
import { TouchableOpacity } from 'react-native'
import { RestaurantInfoCard } from '../../restaurants/components/RestaurantInfoCard'
import { RestaurantsContext } from '../../../services/restaurants/RestaurantsContext'
import { Spacer } from '../../../components/spacer/Spacer'

const NoFavouritesArea = styled(SafeArea)`
align-items: center;
justify-content:center;
`
export const FavouritesScreen = ({navigation}) => {
    const { favourites } = useContext(FavouritesContext)
    return favourites.length ? (
        <SafeArea>
            <RestaurantList
                data={favourites}
                renderItem={({ item }) => (
                    <Spacer>
                        <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}>
                            <RestaurantInfoCard restaurant={item} />
                        </TouchableOpacity>
                    </Spacer>
                )}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    ) : (
        <NoFavouritesArea>
            <Text>No favourites yet</Text >
        </NoFavouritesArea >
    )
}

