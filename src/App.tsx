import MainPage from './components/main/MainPage';
import Nav from './components/navigation/Nav';
import { Container } from "./components/styled/container.styled";
import { ThemeProvider } from "styled-components";

const theme = {
  background: {
    nav: 'white',
    container: '#d8dbe2'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Nav />
        <Container>
          <MainPage />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
