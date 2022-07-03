import { SearchStyled, FormStyled, InputStyled } from "./search.styled";

const Search: React.FC = () => {
    return (
        <SearchStyled>
            <FormStyled>
                <InputStyled placeholder="Search for a country" />
                <i className="bi bi-search"></i>
            </FormStyled>
        </SearchStyled>
    )
}

export default Search;