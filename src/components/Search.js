import { useEffect, useState } from "react";
import "./Search.css";

const Search = ({ allRestaurants, setFilteredRestaurants }) => {
    const [searchText, setSearchText] = useState("")
    function filterData(searchText, allRestaurants) {
        const filteredData = allRestaurants.filter((res) =>
            res?.data?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
            res?.data?.cuisines.toString().toLowerCase().includes(searchText.toLowerCase())

        )
        return filteredData;
    }

    //  Animated placeholder
    useEffect(() => {
        const searchInput = document.getElementById("searchInput");
        const placeholders = ["Biryani", "Burgers", "Truffles", "Roti"];
        let currentPlaceholderIndex = 0;

        searchInput.placeholder = placeholders[currentPlaceholderIndex];

        // setTimeout is used to execute a function once after a time interval. While setInterval is used to run a function repeatedly after a time interval

        // after 3s interval will run
        setInterval(() => {
            searchInput.classList.add("fadeIn")

            // the placeholders are shown in a circular manner, i.e., after the last placeholder is shown, the first placeholder is shown again. modulas operator is used to keep the number inside the bound of array.
            currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length;
            searchInput.placeholder = placeholders[currentPlaceholderIndex];
            // after 2.3s text starts fading and fading process takes .4s. text disappear
            setTimeout(() => {
                searchInput.classList.add("fadeOut")
            }, 2300)

            // after 2.7s (2.3 + .4) the text starts appearing using fadeIn. remove fadeOut class to make it come from bottom.
            setTimeout(() => {
                searchInput.classList.remove("fadeOut")
                searchInput.classList.remove("fadeIn")
            }, 2700)
        }, 3000);

    }, [])

    return (
        <div className="form-control text-lg flex items-center text-gray-700 border-b border-solid border-gray-300 transition ease-in-out m-0">
            <i className="pl-3 py-1.5 fa fa-search mr-4 text-orange-50"></i>
            <input id="searchInput" className="searchInput px-3 py-1.5 flex-grow-[1] focus-visible:outline-0 bg-transparent text-orange-50 placeholder-orange-50 tracking-widest" type="text" placeholder="Search..." aria-label="Search"
                value={searchText}
                onChange={
                    (e) => {
                        setSearchText(e.target.value)

                        if (searchText == "") {
                            setFilteredRestaurants(allRestaurants)
                        }
                        else {
                            setFilteredRestaurants(filterData(e.target.value, allRestaurants))

                        }
                    }

                }
            />
        </div>
    )

}


export default Search;