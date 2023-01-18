import { type } from "os";
import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantList } from "./constants";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    );
};

const Header = () => {
    return (
        <div className="navbar">
            <h3 className="logo"><b>LOGO</b></h3>
            <ul className="menu">
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
            </ul>
            <img src="https://th.bing.com/th/id/OIP.PR9rFODfsm9Rn_FdIGUO1wHaHa?pid=ImgDet&rs=1" alt="User" />
        </div>
    )
}

const Body = () => {
    return (
        <div className="container card-parent">
            {restaurantList.map((restaurant) => {
                return <RestaurantCard {...restaurant?.data?.data} key={ restaurant?.data?.data?.id} />
            })}
        </div>
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)