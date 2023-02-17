import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_API } from "../constants";
import Search from "./Search";
import restaurantsData from "../api";
import Notice from "./Notice";

const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [isCorsOn, setIsCorsOn] = useState(false);

    // Fetch restaurant data via API
    async function getRestaurants() {
        // handle the error using try... catch
        try {
            const response = await fetch(RESTAURANT_API);
            const json = await response.json();
            // updated state variable restaurants with Swiggy API data
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            setIsCorsOn(true) // Show the notice "You are seeing live Swiggy Api data" - Notice.js
        } catch (error) {
            console.log(error);
        }
    }

    // use useEffect for one time call getRestaurants using empty dependency array
    useEffect(() => {

        // if CORS is not enable in browser then show the local data only and show the CORS error in console
        setTimeout(() => {
            setAllRestaurants(restaurantsData);
            setFilteredRestaurants(restaurantsData);
            setIsCorsOn(false) // Show the notice that "You are seeing mocked data. Cors is not enabled"  - Notice.js
        }, 0);

        // if CORS is enable in browser then setTimeout will run and fetch the json data from API and render the UI
        setTimeout(() => {
            getRestaurants();
        }, 20);


    }, []);

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
            <Notice isCorsOn={isCorsOn} />
            {console.log(isCorsOn)}

        </>
    )
}

export default Body;