import Logo from "../img/logo.avif"
const Header = () => {
    return (
        <header className="max-w-screen-md bg-black">
            <img src={Logo} width={150} alt="Zomato" />
        </header>
    )
}

export default Header;