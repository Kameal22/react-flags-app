import Filter from "../filter/Filter";
import Search from "../search/Search";
import {
  MainPageStyled,
  MainPageSearchStyled,
  MainPageCountriesStyled,
  LoadingInfoStyled,
} from "./mainPage.styled";
import { useEffect, useMemo, useState } from "react";
import { CountryInterface } from "../../interfaces/CountriesInterface";
import Country from "../countries/Country";

interface Props {
  loading: boolean;
  countries: CountryInterface[]
}

const MainPage: React.FC<Props> = ({ loading, countries }) => {
  const [countriesOnScreen, setCountriesOnScreen] = useState<CountryInterface[]>([]);

  const [countryName, searchCountryName] = useState("");
  const [chosenRegion, setChosenRegion] = useState("");

  useEffect(() => {
    setCountriesOnScreen(countries.slice(0, 20)) // Set first 20 countries on page load.
  }, [countries])

  const fetchMoreCountries = () => {
    // If user reaches the bottom of the page then run this function's logic.
    const currentLength = countriesOnScreen.length;

    const moreCountries = countries.slice(currentLength, currentLength + 20);

    setCountriesOnScreen(prev => [...prev, ...moreCountries])
  }

  const searchCountries = () => {
    return countriesOnScreen.filter(
      (country) =>
        country.name.toLowerCase().includes(countryName.toLowerCase()) &&
        country.region.toLowerCase().includes(chosenRegion.toLowerCase())
    );
  };

  const filteredCountries = useMemo(searchCountries, [
    //useMemo ensures that the countries variable is recalculated only when either value of selectedCategory/region or countries changes.
    countryName,
    chosenRegion,
    countriesOnScreen,
  ]);

  if (loading) {
    return <LoadingInfoStyled>Loading data...</LoadingInfoStyled>;
  } else {
    return (
      <MainPageStyled>
        <p onClick={fetchMoreCountries}>TEST</p>
        <MainPageSearchStyled>
          <Search value={countryName} changeValue={searchCountryName} />
          <Filter value={chosenRegion} changeValue={setChosenRegion} />
        </MainPageSearchStyled>
        <MainPageCountriesStyled>
          {filteredCountries.map((country) => {
            return (
              <Country
                key={country.name}
                flag={country.flag}
                name={country.name}
                region={country.region}
                population={country.population}
                capital={country.capital}
                details={country.details}
              />
            );
          })}
        </MainPageCountriesStyled>
      </MainPageStyled>
    );
  }
};

export default MainPage;
