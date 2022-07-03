import DarkModeToggler from "./DarkModeToggler";
import { NavStyled } from "../styled/nav.styled";

const Nav: React.FC = () => {
    return (
        <NavStyled>
            <h1>Where in the world?</h1>
            <DarkModeToggler />
        </NavStyled>
    )
}

export default Nav;