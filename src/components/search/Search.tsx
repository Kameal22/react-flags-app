import { SearchStyled, FormStyled, InputStyled } from "./search.styled";
import { CountryInterface } from "../../interfaces/CountriesInterface";

interface Props {
    countries: CountryInterface[]
}

const Search: React.FC<Props> = ({ countries }) => {
    const handleChange = (
        e: React.FormEvent<HTMLInputElement>
    ): void => {
        let searchingValue = e.currentTarget.value;

        const filtered = countries.filter((country) => {
            // return board.boardName
            //   .toLowerCase()
            //   .includes(searchingValue.toLowerCase());
        });
    };

    return (
        <SearchStyled>
            <FormStyled>
                <form autoComplete="off">
                    <InputStyled onChange={handleChange} name="search" type="text" placeholder="Search for a country" />
                    <i className="bi bi-search"></i>
                </form>
            </FormStyled>
        </SearchStyled>
    )
}

export default Search;