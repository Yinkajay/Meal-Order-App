import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styled from 'styled-components'
import { Spacer } from '../spacer/Spacer'
import { CompactRestaurantInfo } from '../restaurants/CompactRestaurantInfo'
import { TouchableOpacity } from 'react-native'


const FavouritesWrapper = styled.View`
padding: 10px;
`

export const FavouritesBar = ({ favourites, onNavigate }) => {


    return (
        <FavouritesWrapper>
            <Spacer variant="left.large">
                <Text>
                    Favourites
                </Text>
            </Spacer>
            <ScrollView horizontal>
                {favourites.map((restaurant) => {
                    const key = restaurant.name;
                    return (
                        <Spacer key={key} position='left' size='medium'>
                            <TouchableOpacity onPress={() => onNavigate("RestaurantDetail", { restaurant })}>
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </TouchableOpacity>
                        </Spacer>
                    )
                })}
            </ScrollView>
        </FavouritesWrapper>
    )
}

