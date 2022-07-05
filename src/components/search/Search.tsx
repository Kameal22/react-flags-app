import { SearchStyled, FormStyled, InputStyled } from "./search.styled";

interface Props {
  value: string;
  changeValue: (value: string) => void;
}

const Search: React.FC<Props> = ({ value, changeValue }) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    let searchingValue = e.currentTarget.value;
    changeValue(searchingValue.toLowerCase());
  };

  return (
    <SearchStyled>
      <FormStyled autoComplete="off">
        <InputStyled
          onChange={handleChange}
          value={value}
          name="search"
          type="text"
          placeholder="Search for a country"
        />
        <i className="bi bi-search"></i>
      </FormStyled>
    </SearchStyled>
  );
};

export default Search;
