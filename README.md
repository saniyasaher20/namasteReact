# FOOD FINDER APP

Live Website Link : [Food Finder App](https://website-clone-2.netlify.app/)

## Q. How to make the Swiggy Api work without Cors extension?
(Credit: [Chetan Nada]("https://github.com/chetannada")) 

Ans.Please refer the **Body.js** file inside src/components/Body.js for more detail. Here are summary of what needs be changed:

1. Change the useEffect() hook. Add two setTimeout(). 
At 0ms setTimeout(.., 0) will run and show the mocked data instantly.
After 20ms the second setTimeout(.., 20) will run and fetch the data from API. But the problem is, even if the fetch API is'nt working, this setTimeout(.., 20) will still try to fetch data from API after 20ms and throws a error.
If CORS is not enabled, we will see mocked data for 20ms, then we will see error. Solution in Step 2 👇

```jsx
useEffect(() => {

    // if CORS is not enable in browser then show the local data only and show the CORS error in console
    setTimeout(() => {
        setAllRestaurants(restaurantsData);
        setFilteredRestaurants(restaurantsData);
    }, 0);

    // if CORS is enable in browser then setTimeout will run and fetch the json data from API and render the UI
    setTimeout(() => {
        getRestaurants();
    }, 20);


}, []);
```

2. Add try-catch block in getRestaurant() function. If API is'nt fetched properly then the try{} gets ignored and catch{} block will run.
```js
async function getRestaurants() {
    // handle the error using try-catch
    try {
        const response = await fetch(RESTAURANT_API);
        const json = await response.json();

        // updated state variable restaurants with Swiggy API data
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
        console.log(error);
    }
}
```
