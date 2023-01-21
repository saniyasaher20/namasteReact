import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    );
};


// Routing
// always create it after Applayout. It won't work if create it before component.
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />, // AppLayout will loaded on "/"
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />,
    }
]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)