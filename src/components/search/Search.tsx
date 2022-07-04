import { SearchStyled, FormStyled, InputStyled } from "./search.styled";
import { CountryInterface } from "../../interfaces/CountriesInterface";
import { useState } from "react";

interface Props {
    value: string;
    changeValue: (value: string) => void;
}

const Search: React.FC<Props> = ({ value, changeValue }) => {

    const handleChange = (
        e: React.FormEvent<HTMLInputElement>
    ): void => {
        let searchingValue = e.currentTarget.value;
        changeValue(searchingValue)
    };

    return (
        <SearchStyled>
            <FormStyled>
                <form autoComplete="off">
                    <InputStyled onChange={handleChange} value={value} name="search" type="text" placeholder="Search for a country" />
                    <i className="bi bi-search"></i>
                </form>
            </FormStyled>
        </SearchStyled>
    )
}

export default Search;