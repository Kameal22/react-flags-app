import DarkModeToggler from "./DarkModeToggler";
import { NavStyled } from "./nav.styled";
import { Link } from "react-router-dom";

interface Props {
  toggleDarkMode: () => void;
  theme: string;
}

const Nav: React.FC<Props> = ({ toggleDarkMode, theme }) => {
  return (
    <NavStyled>
      <Link
        style={{ textDecoration: "none", color: "inherit", width: "15%", marginLeft: '2%' }}
        to="/"
      >
        <h1>Where in the world?</h1>
      </Link>
      <DarkModeToggler toggleDarkMode={toggleDarkMode} theme={theme} />
    </NavStyled>
  );
};

export default Nav;
