import Filter from "../filter/Filter";
import Search from "../search/Search";
import {
  MainPageStyled,
  MainPageSearchStyled,
  MainPageCountriesStyled,
  LoadingInfoStyled,
  ToggleFilters,
} from "./mainPage.styled";
import { useEffect, useMemo, useState } from "react";
import { CountryInterface } from "../../interfaces/CountriesInterface";
import Country from "../countries/Country";
import { Waypoint } from "react-waypoint";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useToggle from "../../hooks/useToggle";
import { FilterCountries } from "../../utils/FilterCountries"

interface Props {
  loading: boolean;
  countries: CountryInterface[]
}

const MainPage: React.FC<Props> = ({ loading, countries }) => {
  const [countriesOnScreen, setCountriesOnScreen] = useState<CountryInterface[]>([]);

  const [countryName, searchCountryName] = useState("");
  const [chosenRegion, setChosenRegion] = useState("");

  const [searchingOrFiltering, toggleSearchingOrFiltering] = useToggle(false);

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
        return FilterCountries(countries, countryName)
      }
      setFetchingAllowed(true)
      return FilterCountries(countriesOnScreen, countryName)

    } else {
      setFetchingAllowed(false)
      if (countryName) {
        return FilterCountries(countries, countryName, chosenRegion)
      }
      else {
        return FilterCountries(countriesOnScreen, countryName, chosenRegion)
      }
    }
  };

  const filteredCountries = useMemo(searchCountries, [
    //useMemo ensures that the countries variable is recalculated only when either value of selectedCategory/region or countries changes.
    countryName,
    chosenRegion,
    countriesOnScreen,
  ]);

  return (
    <MainPageStyled>
      {loading &&
        <LoadingInfoStyled>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </LoadingInfoStyled>
      }
      <MainPageSearchStyled>
        {searchingOrFiltering &&
          <>
            <Search value={countryName} changeValue={searchCountryName} />
            <Filter value={chosenRegion} changeValue={setChosenRegion} />
          </>
        }
        <ToggleFilters onClick={toggleSearchingOrFiltering}>{searchingOrFiltering ? 'Hide filters' : 'Show filters'}</ToggleFilters>
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

export default MainPage;