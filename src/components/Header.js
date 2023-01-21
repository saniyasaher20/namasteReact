const Title = () => {
    return <p>Food Villa</p>
}

export const Header = () => {
    return (
        <div className="navbar">
            <h1 className="logo"><Title /></h1>
            <ul className="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <img src="https://th.bing.com/th/id/OIP.PR9rFODfsm9Rn_FdIGUO1wHaHa?pid=ImgDet&rs=1" alt="User" />
        </div>
    );
};