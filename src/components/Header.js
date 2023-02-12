import Logo from "../img/logo.png"
import Login from "./Login"

const Header = () => {
    return (
        <header className="container py-5 flex justify-between items-center">
            <img src={Logo} width={120} alt="Zomato" />
            <Login />
        </header>
    )
}

export default Header;