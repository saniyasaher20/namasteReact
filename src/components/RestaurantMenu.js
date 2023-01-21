import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const params = useParams();
    const { id } = params;

    const [restaurant, setRestaurant] = useState({});
    // we can do destructure on the fly
    // const { id } = useParams()

    useEffect(
        () => { getRestaurantInfo() },
        []
    )

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=0&lng=0&restaurantId=" + id);
        const json = await data.json();
        // console.log(json?.data?.cards[0]?.card?.card?.info);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)
    }

    // console.log(params)
    return !restaurant ? (<Shimmer /> ): (
        <div className="container">
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="" width={400} />
            <h1>Restaurant id: {restaurant.name}</h1>
            <p>Area: {restaurant.areaName}</p>
            <p>City: {restaurant.city}</p>
            <p>Average Rating: {restaurant.avgRating}</p>

            {/* <h4>Other Menu from {restaurant.name}</h4> */}
            {/* This will Iterate a list of objects */}
            {/* <p>{
                Object.values(restaurant.menu.items).map((item) => {
                    <li key={item.id}>{item.name}</li>
                })
            }</p> */}
        </div>

    )
}

export default RestaurantMenu;