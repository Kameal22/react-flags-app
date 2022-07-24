import MainPage from "./components/main/MainPage";
import Nav from "./components/navigation/Nav";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styled/global";
import { useState } from "react";
import { lightTheme, darkTheme } from "./themes/themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./components/details/DetailsPage";
import { useEffect } from "react";
import { ALL_FLAGS_API_URL } from "./constants/API_URL";
import { fetchData } from "./utils/FetchData";
import { CountryInterface } from "./interfaces/CountriesInterface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/Store";
import { fetchCountries } from "./redux/slices/CountriesSlice";


function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const getCountries = (countries: CountryInterface[]) => {
    dispatch(fetchCountries({ countries }));
  };

  useEffect(() => {
    fetchData(ALL_FLAGS_API_URL, getCountries, setLoading);
  }, []);

  const countries = useSelector(
    (state: RootState) => state.countries.countries
  ); //These are all countries fetched from API.

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Nav toggleDarkMode={changeTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<MainPage loading={loading} countries={countries} />} />
          <Route path="/:countryName" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
