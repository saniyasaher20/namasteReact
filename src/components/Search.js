import { useState } from "react";
import { filterData } from "../utils/helper";

const Search = ({ filteredRestaurants, setFilteredRestaurants }) => {
    const [searchText, setSearchText] = useState("")

    return (
        <div className="form-control px-3 py-1.5 text-gray-700 border border-solid border-gray-300 rounded transition ease-in-out m-0 ">
            <i className="fa fa-search mr-4 stroke-slate-400"></i>
            <input className="focus-visible:outline-0" type="search" placeholder="Search" aria-label="Search"
                value={searchText}
                onChange={
                    (e) => {
                        setSearchText(e.target.value)
                        setFilteredRestaurants(filterData(searchText, filteredRestaurants))
                   }

                }
            />
        </div>
    )
}
export default Search;