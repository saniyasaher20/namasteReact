import { restaurantList } from "../constants";

const Body = () => {
    return (
        <>
            <div className="container card-parent">
                {restaurantList.map((restaurant) => {
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