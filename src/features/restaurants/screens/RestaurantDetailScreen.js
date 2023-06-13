import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { RestaurantInfoCard } from '../components/RestaurantInfoCard'
import { List } from 'react-native-paper'
import { SafeArea } from '../../../components/utility/SafeAreaComponent'

export const RestaurantDetailScreen = ({ route }) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false)
    const [lunchExpanded, setLunchExpanded] = useState(false)
    const [dinnerExpanded, setDinnerExpanded] = useState(false)
    const [drinksExpanded, setDrinksExpanded] = useState(false)

    const { restaurant } = route.params
    return (
            <SafeArea>
                <RestaurantInfoCard restaurant={restaurant} />
                <ScrollView>
                    <List.Accordion
                        title="Breakfast"
                        left={(props) => <List.Icon {...props} icon="bread-slice" />}
                        expanded={breakfastExpanded}
                        onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                    >
                        <List.Item title="Coffee" />
                        <List.Item title="Coffee" />
                        <List.Item title="Coffee" />
                    </List.Accordion>
                    <List.Accordion
                        title="Lunch"
                        left={(props) => <List.Icon {...props} icon="bread-slice" />}
                        expanded={lunchExpanded}
                        onPress={() => setLunchExpanded(!lunchExpanded)}
                    >
                        <List.Item title="Coffee" />
                        <List.Item title="Coffee" />
                    </List.Accordion>
                    <List.Accordion
                        title="Dinner"
                        left={(props) => <List.Icon {...props} icon="bread-slice" />}
                        expanded={dinnerExpanded}
                        onPress={() => setDinnerExpanded(!dinnerExpanded)}
                    >
                        <List.Item title="Coffee" />
                        <List.Item title="Coffee" />
                    </List.Accordion>
                    <List.Accordion
                        title="Drinks"
                        left={(props) => <List.Icon {...props} icon="bread-slice" />}
                        expanded={drinksExpanded}
                        onPress={() => setDrinksExpanded(!drinksExpanded)}
                    >
                        <List.Item title="Coffee" />
                        <List.Item title="Tea" />
                        <List.Item title="Modelo" />
                        <List.Item title="Coke" />
                        <List.Item title="Fanta" />
                    </List.Accordion>
                </ScrollView>
            </SafeArea>
    )
}

