import React from "react";
import ReactDOM from "react-dom/client";
import "/App.css";

// React.createElement => Object => HTML DOM

// import { createElement as ce } from "react";

// const h4 = ce(
//     "h4",
//     {}, // this object is known as props
//     "H4"
// )

// const h3 = ce(
//     "h3",
//     {},
//     "H3"

// )

// const h2 = ce(
//     "h2",
//     {},
//     "H2"

// )

// const h1 = ce(
//     "h1",
//     {},
//     [h2, h3, h4]
// )

// REACT ELEMENT
const el = <p>This is a react element</p>

// JSX

// const h1 = <h1 id="h1" key="h1">Heading</h1>
// for multiple lines we need to wrap the code in ( )

// React Component - Class based component - OLD
// - Funtional Component - NEW

// const Fn = () => {
//     return (
//         <>
//             {el}
//             <h1>Functional component</h1>
//         </>
//     )
// }



/* ---------------------------- Coding Assignemt ---------------------------- */

// 1. Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

const header1 = React.createElement(
    "div",
    { className: "title" },
    [
        React.createElement("h1", { key: "h1" }, "Heading 1"),
        React.createElement("h2", { key: "h2" }, "Heading 2"),
        React.createElement("h3", { key: "h3" }, "Heading 3")
    ]
)

// Create the same element using JSX
const header2 = (
    <div className="title">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>
)

// Create a functional component of the same with JSX
const Header3 = () => {
    return (
        <div className="title">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
        </div>
    )
}

// Create a Header Component from scratch using Functional Components with JSX
const Navbar = () => {
    return (
        <div className="navbar">
            <h2 className="logo">LOGO</h2>
            <span className="searchBox">
                <input type="search" placeholder="Search ..." />
                <input type="button" value="Search" />
           </span>
            <span className="user">
                <img src="https://th.bing.com/th/id/OIP.qc6Rzs50f_8enPWugKmN5AAAAA?pid=ImgDet&rs=1" alt="User Avatar" width="50px"/>
            </span>
        </div>
    )
}


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Navbar />);