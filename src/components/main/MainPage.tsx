import Filter from "../filter/Filter";
import Search from "../search/Search";
import {
  MainPageStyled,
  MainPageSearchStyled,
  MainPageCountriesStyled,
} from "./mainPage.styled";
import { fetchData } from "../../utils/FetchData";
import { useEffect, useMemo, useState } from "react";
import { ALL_FLAGS_API_URL } from "../../constants/API_URL";
import { CountryInterface } from "../../interfaces/CountriesInterface";
import Country from "../countries/Country";

const MainPage: React.FC = () => {
  const [countries, setCountries] = useState<CountryInterface[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  // Add loading while fetching data
  // Add FILTERVALUE reseting by a button which will be visible when filterValue isnt empty.

  useEffect(() => {
    fetchData(ALL_FLAGS_API_URL, setCountries);
  }, []);

  const changeSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const changeFilterValue = (value: string) => {
    setFilterValue(value);
  };

  const filterCountries = () => {
    if (searchValue) {
      return countries.filter((country) =>
        country.name.toLocaleLowerCase().includes(searchValue)
      );
    }
    return countries;
  };

  const filteredCountries = useMemo(filterCountries, [
    //useMemo ensures that the filteredList variable is recalculated only when either value of selectedCategory or sportList changes.
    searchValue,
    countries,
  ]);

  return (
    <MainPageStyled>
      <MainPageSearchStyled>
        <Search value={searchValue} changeValue={changeSearchValue} />
        <Filter changeValue={changeFilterValue} />
      </MainPageSearchStyled>
      <MainPageCountriesStyled>
        {filteredCountries.map((country) => {
          if (country.region === filterValue) {
            return (
              <Country
                key={country.name}
                flag={country.flag}
                name={country.name}
                region={country.region}
                population={country.population}
                capital={country.capital}
              />
            );
          } else if (!filterValue) {
            return (
              <Country
                key={country.name}
                flag={country.flag}
                name={country.name}
                region={country.region}
                population={country.population}
                capital={country.capital}
              />
            );
          }
        })}
      </MainPageCountriesStyled>
    </MainPageStyled>
  );
};

export default MainPage;
