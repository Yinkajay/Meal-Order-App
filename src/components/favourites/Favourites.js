import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { FavouritesContext } from '../../services/favourites/FavouritesContext'


const FavouriteButton = styled(TouchableOpacity)`
position: absolute;
top:25px;
right:25px;
z-index: 9;
`

export const Favourites = ({ restaurant }) => {

    const { favouriteRestaurants, addFavourite, removeFavourite } = useContext(FavouritesContext)


    const isFavourite = favouriteRestaurants.find((r) => r.placeId === restaurant.placeId)
    return (
        <FavouriteButton onPress={() => !isFavourite ? addFavourite(restaurant) : removeFavourite(restaurant)}>
            <AntDesign name={isFavourite ? "heart" : "hearto"} size={24} color='red' />
        </FavouriteButton>
    )
}

