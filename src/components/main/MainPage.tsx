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
import { fetchCountries } from "../../redux/slices/CountriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

const MainPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  //Fetch more details for details component

  const dispatch = useDispatch();

  const getCountries = (countries: CountryInterface[]) => {
    dispatch(
      fetchCountries({ countries })
    )
  }

  const countries = useSelector((state: RootState) => state.countries.countries)

  // Add loading while fetching data
  // Add FILTERVALUE reseting by a button which will be visible when filterValue isnt empty.

  useEffect(() => {
    fetchData(ALL_FLAGS_API_URL, getCountries);
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
                details={country.details}
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
                details={country.details}
              />
            );
          }
        })}
      </MainPageCountriesStyled>
    </MainPageStyled>
  );
};

export default MainPage;
