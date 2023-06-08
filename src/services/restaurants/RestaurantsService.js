import camelize from "camelize";
import { mocks } from "./mock";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {

    return new Promise((resolve, reject) => {
        const mock = mocks[location]
        if (!mock) {
            reject("not found")
        }
        resolve(mock)
    })
}

const transformRestaurants = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        return { ...restaurant, isClosedTempoarily: restaurant.  }
    })
    console.log(mappedResults)
    return camelize(results.length)
}

restaurantsRequest().then((result) => {
    console.log(transformRestaurants(result));
}).catch(err => console.log(err))