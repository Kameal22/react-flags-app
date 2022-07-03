import DarkModeToggler from "./DarkModeToggler";
import { NavStyled } from "./nav.styled";

interface Props {
    toggleDarkMode: () => void;
    theme: string
}

const Nav: React.FC<Props> = ({ toggleDarkMode, theme }) => {
    return (
        <NavStyled>
            <h1>Where in the world?</h1>
            <DarkModeToggler toggleDarkMode={toggleDarkMode} theme={theme} />
        </NavStyled>
    )
}

export default Nav;