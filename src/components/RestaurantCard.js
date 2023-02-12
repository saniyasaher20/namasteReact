import { IMG_CDN_URL } from "../constants";


const RestaurantCard = ({ name, price, cuisines, rating, image }) => {
    return (
        <div className="rounded-md p-4 transition-shadow w-72 shadow-sm shadow-slate-200 hover:shadow-md hover:cursor-pointer">
            <img className="rounded-md" src={IMG_CDN_URL + image} alt="" />

            <div className="restaurantName font-medium flex justify-between items-center mt-1">
                <span>{name}</span>
                <span className="bg-green-600 rounded-full text-sm text-white px-3">{rating}</span>
            </div>

            <div className="cuisines text-gray-500">{
                cuisines.join(", ").length <= 25
                    ?
                    cuisines.join(", ")
                    :
                    cuisines.join(", ").slice(0, 25) + "..."
            }</div>
            <div className="price">{price.toLowerCase()}</div>
        </div>
    )
}

export default RestaurantCard;