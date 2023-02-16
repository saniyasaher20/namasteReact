import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const AppLayout = () => {

    return (
        <div className="m-x">
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)