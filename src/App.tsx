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
import NotFount from "./components/NotFound";
import { useLocalStorage } from "./hooks/useLocalStorage";


function App() {
  const [theme, setTheme] = useLocalStorage("light", "light");
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState<CountryInterface[]>([])

  useEffect(() => {
    fetchData(ALL_FLAGS_API_URL, setCountries, setLoading);
  }, []);

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Nav toggleDarkMode={changeTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<MainPage loading={loading} countries={countries} />} />
          <Route path="/country/:countryName" element={<DetailsPage countries={countries} />} />
          <Route path="*" element={<NotFount />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
