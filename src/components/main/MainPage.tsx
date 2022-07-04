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

  useEffect(() => {
    fetchData(ALL_FLAGS_API_URL, setCountries);
  }, []);
  return (
    <MainPageStyled>
      <MainPageSearchStyled>
        <Search countries={countries} />
        <Filter />
      </MainPageSearchStyled>
      <MainPageCountriesStyled>
        {countries.map((country) => {
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
