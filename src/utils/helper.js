export function filterData(searchText, filteredRestaurants) {
    const filteredData = filteredRestaurants.filter((res) =>
        res?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    )
    return filteredData;
    // console.log(filteredRestaurants)
}