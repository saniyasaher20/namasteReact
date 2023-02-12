import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
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