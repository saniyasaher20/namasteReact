import { useState } from "react";
import { restaurantList } from "../constants";


function filterFn(searchTxt, restaurantVar) {
    const filterData = restaurantVar.filter((restaurant) =>
        restaurant.data?.data?.name.includes(searchTxt)
    );
    return filterData;
}

const Body = () => {
    // const searchTxt = "KFC";
    // searchTxt = local variable, setSearchTxt = fn which maintains the state of the local variable
    const [restaurantVar, setRestaurantVar] = useState(restaurantList);
    const [searchTxt, setSearchTxt] = useState("");


    return (
        <>
            <div className="search-container">
                <input type="search" name="search" id="search"
                    value={searchTxt}
                    onChange={(e) => {
                        setSearchTxt(e.target.value)
                    }}
                    placeholder="Search...."
                />
                <button className="searchBtn" onClick={() => {
                    // filter data
                    const data = filterFn(searchTxt, restaurantVar);

                    // update the state
                    setRestaurantVar(data);
                }}>
                    Search
                </button>
            </div>
            <div className="container card-parent">
                {restaurantVar.map((restaurant) => {
                    return <RestaurantCard {...restaurant?.data?.data} key={restaurant?.data?.data?.id} />
                })}
            </div>
        </>
    )
}


const RestaurantCard = (
    { name, cloudinaryImageId, cuisines, avgRating }
) => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="Food" />
            <div className="content">
                <h2>{name}</h2>
                <p>{cuisines.join(", ")}</p>
                <br />
                <div className="rating">
                    <span>⭐</span>
                    <span>{avgRating}</span>
                </div>
            </div>
        </div>
    )
}


export default Body;