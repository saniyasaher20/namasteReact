import Logo from "../img/logo.avif"
import Search from "./Search"
import Login from "./Login"

const Header = () => {
    return (
        <header className="container py-5 flex justify-between">
            <img src={Logo} width={150} alt="Zomato" />
            <Login />
        </header>
    )
}

export default Header;