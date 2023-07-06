import React from "react";
import { Platform, Text } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";

const CompactImage = styled.Image`
border-radius:10px;
width: 120px;
height:120px;
`
const CompactWebview = styled(WebView)`
border-radius:10px;
width: 120px;
height:120px;
`

const Item = styled.View`
padding: 10px;
max-width: 120px;
align-items: center;
`

const isAndroid = Platform.OS === 'android'

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
    const Image = isAndroid && isMap ? CompactWebview : CompactImage
    return (
        <Item>
            <Image source={{ uri: restaurant.photos[0] }} />
            <Text center variant='caption'>
                {restaurant.name}
            </Text>
        </Item >
    )
}