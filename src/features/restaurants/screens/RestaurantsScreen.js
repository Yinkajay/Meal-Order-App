import React, { useContext, useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/Spacer";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsContext";
import { Search } from "../components/SearchComponent";
import { FavouritesContext } from "../../../services/favourites/FavouritesContext";
import { FavouritesBar } from "../../../components/favourites/FavouritesBar";

// const SafeArea = styled(SafeAreaView)`
// flex:1;]
// ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; 
// `;



const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16
    }
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation}) => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext)
    const { favouriteRestaurants } = useContext(FavouritesContext)
    const [isToggled, setIsToggled] = useState(false)

    return <>
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} />
                </LoadingContainer>
            )}
            <Search isFavouritesToggled={isToggled} onFavouritesToggle={() => setIsToggled(!isToggled)} />
            {isToggled && <FavouritesBar favourites={favouriteRestaurants} onNavigate={navigation.navigate} /> }
            <RestaurantList
                data={restaurants}
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
        <ExpoStatusBar hidden={false} />
    </>;
};


