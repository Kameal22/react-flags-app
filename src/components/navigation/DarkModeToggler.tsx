import { Toggler } from "./toggler.styled";

interface Props {
    toggleDarkMode: () => void;
    theme: string;
}

const DarkModeToggler: React.FC<Props> = ({ toggleDarkMode, theme }) => {
    return (
        <Toggler onClick={() => toggleDarkMode()}>
            {theme === "light" ? <i className="bi bi-moon"></i> : <i className="bi bi-moon-fill"></i>}
            <p>Dark mode</p>
        </Toggler>
    )
}

export default DarkModeToggler;