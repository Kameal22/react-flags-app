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
import { Waypoint } from "react-waypoint";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface Props {
  loading: boolean;
  countries: CountryInterface[]
}

const MainPage: React.FC<Props> = ({ loading, countries }) => {
  const [countriesOnScreen, setCountriesOnScreen] = useState<CountryInterface[]>([]);

  const [countryName, searchCountryName] = useState("");
  const [chosenRegion, setChosenRegion] = useState("");

  const [fetchingAllowed, setFetchingAllowed] = useState(true);

  useEffect(() => {
    setCountriesOnScreen(countries.slice(0, 20)) // Set first 20 countries on page load.
  }, [countries])

  const fetchMoreCountries = () => {
    const currentLength = countriesOnScreen.length;
    const moreCountries = countries.slice(currentLength, currentLength + 20)

    setCountriesOnScreen(prev => [...prev, ...moreCountries])
  }

  const searchCountries = () => {
    if (!chosenRegion) {
      if (countryName) {
        setFetchingAllowed(false)
        return countries.filter(country => country.name.toLowerCase().includes(countryName.toLowerCase()))
      }
      return countriesOnScreen.filter(country => country.name.toLowerCase().includes(countryName.toLowerCase()))
    } else {
      if (countryName) {
        setFetchingAllowed(false)
        return countries.filter(country => country.name.toLowerCase().includes(countryName.toLowerCase()) && country.region.toLowerCase() === chosenRegion.toLowerCase())
      } else {
        return countriesOnScreen.filter(country => country.name.toLowerCase().includes(countryName.toLowerCase()) && country.region.toLowerCase() === chosenRegion.toLowerCase())
      }
    }
  };

  const filteredCountries = useMemo(searchCountries, [
    //useMemo ensures that the countries variable is recalculated only when either value of selectedCategory/region or countries changes.
    countryName,
    chosenRegion,
    countriesOnScreen,
  ]);

  if (loading) {
    return (
      <LoadingInfoStyled>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      </LoadingInfoStyled>
    )
  } else {
    return (
      <MainPageStyled>
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
        {fetchingAllowed && <Waypoint onEnter={fetchMoreCountries} />}

      </MainPageStyled>
    );
  }
};

export default MainPage;