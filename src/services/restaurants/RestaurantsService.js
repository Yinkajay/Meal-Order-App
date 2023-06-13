import camelize from "camelize";
import { mockImages, mocks } from "./mock";

export const restaurantsRequest = (location) => {

    return new Promise((resolve, reject) => {
        const mock = mocks[location]
        if (!mock) {
            reject("Not found")
        }
        resolve(mock)
    })
}

export const transformRestaurants = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
        })
        return { ...restaurant, isClosedTempoarily: restaurant.business_status === "CLOSED_TEMPORARILY", isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now, address: restaurant.vicinity }
    })
    return camelize(mappedResults)
}

restaurantsRequest().then((result) => {
    console.log(transformRestaurants(result));
}).catch(err => console.log(err))
