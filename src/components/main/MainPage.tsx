import Filter from "../filter/Filter";
import Search from "../search/Search";
import {
  MainPageStyled,
  MainPageSearchStyled,
  MainPageCountriesStyled,
} from "./mainPage.styled";
import { fetchData } from "../../utils/FetchData";
import { useEffect, useState } from "react";
import { ALL_FLAGS_API_URL } from "../../constants/API_URL";
import { CountryInterface } from "../../interfaces/CountriesInterface";
import Country from "../countries/Country";

const MainPage: React.FC = () => {
  const [countries, setCountries] = useState<CountryInterface[]>([]);
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetchData(ALL_FLAGS_API_URL, setCountries);
  }, []);

  const changeSearchValue = (value: string) => {
    setSearchValue(value)
  }

  return (
    <MainPageStyled>
      <MainPageSearchStyled>
        <Search value={searchValue} changeValue={changeSearchValue} />
        <Filter />
      </MainPageSearchStyled>
      <MainPageCountriesStyled>
        {countries.filter(country => country.name.toLocaleLowerCase().includes(searchValue)).map((country) => {
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
        })}
      </MainPageCountriesStyled>
    </MainPageStyled>
  );
};

export default MainPage;
