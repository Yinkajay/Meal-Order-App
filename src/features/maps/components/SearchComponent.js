import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/LocationContext";

const SearchContainer = styled.View`
padding: ${props => props.theme.space[3]};
position: absolute;
z-index: 999;
top: 35px;
width: 100%;
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext)
    const [searchWord, setSearchWord] = useState(keyword)

    useEffect(() => {
        setSearchWord(keyword)
    }, [keyword])

    return (
        <SearchContainer>
            <Searchbar placeholder="Search a location"
            icon="map"
             value={searchWord} onSubmitEditing={() => { search(searchWord) }} onChangeText={(searchtext) => {
                setSearchWord(searchtext)
            }} />
        </SearchContainer>
    )
}
