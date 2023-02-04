import { useEffect, useState } from "react";
// import { RESTAURANT_API } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { filterData } from "../utils/helper"
import Search from "./Search";

const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    // Fetch restaurant data via API
    async function getRestaurants() {
        // const data = await fetch(RESTAURANT_API);
        // const json = await data.json();
        const restaurantData = await import("../api.json");
        // console.log(restaurantData?.data?.cards[0]?.data?.data?.cards)
        setAllRestaurants(restaurantData?.data?.cards[0]?.data?.data?.cards)
        setFilteredRestaurants(restaurantData?.data?.cards[0]?.data?.data?.cards)
    }

    useEffect(() => {
        getRestaurants();
    }, [])


    return (
        <>
            <Search filteredRestaurants={filteredRestaurants} setFilteredRestaurants={setFilteredRestaurants} />
            <div className="container mx-auto py-6 flex gap-10 flex-wrap justify-between">
                {
                    filteredRestaurants.map((res) => {
                        return (
                            <RestaurantCard
                                key={res?.data?.id}
                                name={res?.data?.name}
                                image={res?.data?.cloudinaryImageId}
                                rating={res?.data?.avgRating}
                                price={res?.data?.costForTwoString}
                                cuisines={res?.data?.cuisines}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Body;