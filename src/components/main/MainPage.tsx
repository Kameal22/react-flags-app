import Filter from "../filter/Filter";
import Search from "../search/Search";
import { MainPageStyled, MainPageSearch } from "./mainPage.styled";
import { fetchData } from "../../utils/FetchData";
import { useEffect, useState } from "react";
import { ALL_FLAGS_API_URL } from "../../constants/API_URL";
import { CountryInterface } from "../../interfaces/CountriesInterface";

const MainPage: React.FC = () => {
  const [countries, setCountries] = useState<CountryInterface[]>([]);

  useEffect(() => {
    fetchData(ALL_FLAGS_API_URL, setCountries);
  }, []);
  return (
    <MainPageStyled>
      <MainPageSearch>
        <Search />
        <Filter />
      </MainPageSearch>
    </MainPageStyled>
  );
};

export default MainPage;
