import DarkModeToggler from "./DarkModeToggler";
import Logo from "./Logo";

const Nav: React.FC = () => {
    return (
        <div id="navDiv">
            <Logo />
            <DarkModeToggler />
        </div>
    )
}

export default Nav;