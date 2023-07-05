import React from "react";
import { StyleSheet, View } from "react-native";
import { SvgXml } from "react-native-svg";
import StarIcon from "../../../../assets/StarIcon";
import OpenIcon from "../../../../assets/OpenIcon";
import { Spacer } from "../../../components/spacer/Spacer";
import { Text } from "../../../components/typography/TextComponent";
import styled from "styled-components/native";
import { Icon, Address, Info, OpenStatus, Rating, RestaurantCard, RestaurantCardCover, Section } from "./RestaurantInfoCardStyles.js";
import { ActivityIndicator } from "react-native-paper";
import { Favourites } from "../../../components/favourites/Favourites";



export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const { name = "Chicken rep",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"],
        address = "20 LA crescent",
        isOpen = true,
        rating = 4,
        isClosedTempoarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.round(rating)));

    return (
        <RestaurantCard mode="elevated" style={styles.card}>
            <Favourites />
            <RestaurantCardCover style={styles.cover} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((item, index) => <SvgXml xml={StarIcon} key={index} width={20} height={20} />)}
                    </Rating>
                    <OpenStatus>
                        {isClosedTempoarily && (
                            <Text variant='error'>
                                CLOSED
                            </Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpen && <SvgXml xml={OpenIcon} width={30} height={30} />}
                        </Spacer>
                        <View style={{ paddingLeft: 16 }} />
                        <Icon style={{ width: 15, height: 15 }} source={{ uri: icon }} />
                    </OpenStatus>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};

const styles = StyleSheet.create({
});
