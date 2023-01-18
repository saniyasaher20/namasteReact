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
                <RestaurantCard {...restaurant?.data?.data} />
            })}
        </div>
    )
}

const RestaurantCard = ({ name }) => {
    return (
        <div className="card">
            <img src="https://th.bing.com/th/id/OIP.p-bnSeGKkQKkm7pFDV1HfwHaEo?pid=ImgDet&rs=1" alt="Food" />
            <div className="content">
                <h2>{name}</h2>
                {/* <p>{props.description}</p> */}
                <br />
                <div className="rating">
                    <span>⭐</span>
                    {/* <span>{props.rating}</span> */}
                </div>
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)