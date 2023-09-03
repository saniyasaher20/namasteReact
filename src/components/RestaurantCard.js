import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    // const { cloudinaryImageId, name, cuisines, avgRating } = restaurant.data?.data;
    return (
        <div className="card">
            <img
                className="img-fluid"
                src={IMG_CDN_URL + cloudinaryImageId}
                alt="Food"
                loading="lazy"
            />
            <div className="content">
                <h2>{name}</h2>
                <p>{cuisines.join(", ")}</p>
                <br />
                <div className="rating">
                    <span>⭐</span>
                    <span> {avgRating}</span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
