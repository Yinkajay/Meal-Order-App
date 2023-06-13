import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";
import { Search } from "../components/SearchComponent";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`


export const MapScreen = () => {
    return (
        <>
            <Search />
            <Map />
        </>
    )
}