import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const AppLayout = () => {

    const [user, setUser] = useState({
        name: "Saniya Saher",
        roll: "223"
    })

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};


const Instamart = lazy(() => import("./components/Instamart"));

// Routing
// always create it after Applayout. It won't work if create it before component.
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />, // AppLayout will loaded on "/"
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: (
                    <Suspense>
                        <Instamart />
                    </Suspense>
                )
            }

        ]
    },

    // {
    //     path: "/about",
    //     element: <About />,
    // }
]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)