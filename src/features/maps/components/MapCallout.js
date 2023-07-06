import React from "react";
import { Image } from "react-native";
import { Card } from "react-native-paper";

import styled from 'styled-components/native'
import { CompactRestaurantInfo } from "../../../components/CompactRestaurantInfo";

const CalloutImage = styled.Image`

`


const CalloutText = styled.Text`
`
export const MapCallout = ({ restaurant }) => {

    return (
        <>
        <CompactRestaurantInfo isMap restaurant={restaurant}/>
            {/* <Card.Cover source={{ uri: restaurant.photos[0] }} />
            <CalloutText>
                {restaurant.name}
            </CalloutText> */}
        </>
    )
}