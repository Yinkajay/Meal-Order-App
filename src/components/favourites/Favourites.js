import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import { FavouritesContext } from '../../services/favourites/FavouritesContext'


const FavouriteButton = styled(TouchableOpacity)`
position: absolute;
top:10px;
right:10px;
z-index: 9;
`

export const Favourites = () => {

    const { favouriteRestaurants, addFavourite, removeFavourite } = useContext(FavouritesContext)

    return (
        <FavouriteButton>
            <AntDesign name='heart' size={24} color='red' />
        </FavouriteButton>
    )
}

