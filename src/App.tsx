import MainPage from "./components/main/MainPage";
import Nav from "./components/navigation/Nav";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styled/global";
import { useState } from "react";
import { lightTheme, darkTheme } from "./themes/themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./components/details/DetailsPage";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Nav toggleDarkMode={changeTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:countryName" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
