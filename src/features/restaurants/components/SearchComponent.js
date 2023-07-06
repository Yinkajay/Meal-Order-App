import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/LocationContext";

const SearchContainer = styled.View`
padding: ${props => props.theme.space[3]};
`;
export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
    const { keyword, search } = useContext(LocationContext)
    const [searchWord, setSearchWord] = useState(keyword)

    useEffect(() => {
        setSearchWord(keyword)
    }, [keyword])
    return (
        <SearchContainer>
            <Searchbar icon={isFavouritesToggled ? "heart" : "heart-outline"} onIconPress={onFavouritesToggle} placeholder="Search a location" value={searchWord} onSubmitEditing={() => { search(searchWord) }} onChangeText={(searchtext) => {
                setSearchWord(searchtext)
            }} />
        </SearchContainer>
    )
}
