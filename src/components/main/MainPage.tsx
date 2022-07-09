import Filter from "../filter/Filter";
import Search from "../search/Search";
import {
  MainPageStyled,
  MainPageSearchStyled,
  MainPageCountriesStyled,
  LoadingInfoStyled,
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
  const [loading, setLoading] = useState(true);
  const [countryName, searchCountryName] = useState("");
  const [chosenRegion, setChosenRegion] = useState("");

  const dispatch = useDispatch();

  const getCountries = (countries: CountryInterface[]) => {
    dispatch(fetchCountries({ countries }));
  };

  const countries = useSelector(
    (state: RootState) => state.countries.countries
  );

  useEffect(() => {
    fetchData(ALL_FLAGS_API_URL, getCountries, setLoading);
  }, []);

  const searchCountries = () => {
    return countries
      .filter((country) => country.name.includes(countryName) && country.region.includes(chosenRegion))
  };

  const filteredCountries = useMemo(searchCountries, [
    //useMemo ensures that the countries variable is recalculated only when either value of selectedCategory/region or countries changes.
    countryName,
    chosenRegion,
    countries,
  ]);

  if (loading) {
    return <LoadingInfoStyled>Loading data...</LoadingInfoStyled>;
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
          <div style={{ width: "26%" }}></div>
        </MainPageCountriesStyled>
      </MainPageStyled>
    );
  }
};

export default MainPage;
