import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
flex:1;
${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; 
`;

const SearchContainer = styled(View)`
padding:16px;
`;

const RestaurantListContainer = styled.View`
flex:1;
padding: 18px;
background-color:blue    
`;


export const RestaurantsScreen = () => {
    return <>
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder="Search" />
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurantInfoCard />
            </RestaurantListContainer>
        </SafeArea>
        <ExpoStatusBar hidden={false} />
    </>;
};


