import { Link } from "react-router-dom";
const Title = () => {
    return <p>Food Villa</p>
}

export const Header = () => {
    return (
        <div className="navbar">
            <h1 className="logo"><Title /></h1>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <img src="https://th.bing.com/th/id/OIP.PR9rFODfsm9Rn_FdIGUO1wHaHa?pid=ImgDet&rs=1" alt="User" />
        </div>
    );
};