export const Title = () => {
    return <h1>FOOD VILLA</h1>;
}

export const Header = () => {
    return (
        <div className="navbar">
            <h3 className="logo"><Title /></h3>
            <ul className="menu">
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
            </ul>
            <img src="https://th.bing.com/th/id/OIP.PR9rFODfsm9Rn_FdIGUO1wHaHa?pid=ImgDet&rs=1" alt="User" />
        </div>
    );
};

