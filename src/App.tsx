import MainPage from './components/main/MainPage';
import Nav from './components/navigation/Nav';
import { Container } from "./components/styled/container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyles from './components/styled/global';
import { useState } from 'react';
import { lightTheme, darkTheme } from './themes/themes';

function App() {
  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Nav toggleDarkMode={changeTheme} theme={theme} />
        <Container>
          <MainPage />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
