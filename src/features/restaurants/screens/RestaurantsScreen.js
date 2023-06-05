import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/Spacer";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";

// const SafeArea = styled(SafeAreaView)`
// flex:1;]
// ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; 
// `;

const SearchContainer = styled(View)`
padding: ${props => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    }
})``


export const RestaurantsScreen = () => {
    return <>
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder="Search" />
            </SearchContainer>
            <RestaurantList
                data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
                renderItem={() => (
                    <Spacer>
                        <RestaurantInfoCard />
                    </Spacer>
                )}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
        <ExpoStatusBar hidden={false} />
    </>;
};


