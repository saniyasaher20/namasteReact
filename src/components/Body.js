import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_API } from "../constants";
import Search from "./Search";

const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    console.log(RESTAURANT_API)
    // Fetch restaurant data via API
    async function getRestaurants() {
        const data = await fetch(RESTAURANT_API);
        const json = await data.json();
        // const json = await import("../api.json"); // offline api, change -> cards[0] 
        // console.log(json?.data?.cards[0]?.data?.data?.cards)

        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    useEffect(() => {
        getRestaurants();
    }, [])

    // early return
    if (!allRestaurants) return null;

    return (
        <>
            <section className="bg-gradient-to-b from-orange-700 to-red-800 py-10">
                <div className="container w-2/4 py-6">
                    <Search
                        allRestaurants={allRestaurants}
                        setFilteredRestaurants={setFilteredRestaurants}
                    />
                </div>
            </section>
            <div className="container mx-auto py-6 grid grid-cols-4 gap-8">
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