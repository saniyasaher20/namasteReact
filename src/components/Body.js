import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


function filterFn(searchTxt, filteredRestaurants) {
    const filterData = filteredRestaurants.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
    );
    return filterData;
};

const Body = () => {
    const [searchTxt, setSearchTxt] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    console.log(useState())
    // useEffect(
    //     () => { console.log("This is useEffect") }
    //     , [filteredRestaurants]
    // );

    useEffect(
        () => {
            // API call
            getRestaurants();
        },
        []
    );

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    // Check whether a user is online
    const online = useOnline();
    if (!online) {
        return <h1>🔴 Please check your internet connection</h1>
    }

    // early return (component will not render)
    if (!allRestaurants) return null;

    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-wrapper container">
                <input type="search" name="search" id="search" placeholder="Search..."
                    value={searchTxt}
                    onChange={(e) => {
                        setSearchTxt(e.target.value)
                    }} />
                <button onClick={() => {
                    const data = filterFn(searchTxt, allRestaurants);
                    (data?.length === 0) ? document.getElementById("err").innerHTML = "<h1>No Restaurants Found. Search Again😥</h1>"
                        :
                        setFilteredRestaurants(data)
                        ;
                    // console.log(data?.length === 0)
                }

                }>Filter</button>
                <span id="err"></span>
            </div>

            <div className="container card-parent flex justify-between flex-wrap" id="card-parent">
                {
                    filteredRestaurants.map((restaurant) => {
                        return <Link
                            to={"/restaurant/" + restaurant?.data?.id}
                            key={"/restaurant/" + restaurant?.data?.id}>
                            <RestaurantCard {...restaurant?.data} key={restaurant?.data?.id} />
                        </Link>
                    })
                }
            </div>

        </>

    );
};
export default Body;