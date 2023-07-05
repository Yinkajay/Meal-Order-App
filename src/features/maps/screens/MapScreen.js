import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/SafeAreaComponent";
import { Search } from "../components/SearchComponent";
import { LocationContext } from "../../../services/location/LocationContext";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsContext";
import { MapCallout } from "../components/MapCallout";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`
const SomeText = styled.Text``

export const MapScreen = ({navigation}) => {
    const { location } = useContext(LocationContext)
    const { restaurants = [] } = useContext(RestaurantsContext)
    const [latitudeDelta, setLatitudeDelta] = useState(0)


    const { lat, lng, viewport } = location
    console.log(viewport)

    useEffect(() => {
        const northeastLatitude = viewport.northeast.lat
        const southwestLatitude = viewport.southwest.lat

        const latDelta = northeastLatitude - southwestLatitude
        setLatitudeDelta(latDelta)
    }, [location, viewport])

    return (
        <>
            <Search />
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latitudeDelta,
                    longitudeDelta: 0.02,
                }}
            >
                {restaurants.map((restaurant) => {
                    return (<Marker
                        key={restaurant.name}
                        title={restaurant.name}
                        pinColor="black"
                        coordinate={{ latitude: restaurant.geometry.location.lat, longitude: restaurant.geometry.location.lng }}
                    >
                        <Callout onPress={()=>navigation.navigate("RestaurantDetail", restaurant)}>
                            <View>
                                <MapCallout restaurant={restaurant} />
                            </View>
                        </Callout>
                    </Marker>

                    )
                })}
            </Map>
        </>
    )
} 