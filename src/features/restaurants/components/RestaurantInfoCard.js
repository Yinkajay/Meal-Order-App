import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
padding: 15px;
color: ${props => props.theme.colors.ui.primary}
`;

const RestaurantCard = styled(Card)`
backgroundColor: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
padding: 20px;
backgorundColor:white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const { name = "Chicken rep",
        icon,
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
        address = "20 LA crescent",
        isOpen = true,
        rating = 4,
        isClosedTempoarily,
    } = restaurant;
    return (
        <RestaurantCard mode="elevated" style={styles.card}>
            <RestaurantCardCover style={styles.cover} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
    );
};

const styles = StyleSheet.create({
});
