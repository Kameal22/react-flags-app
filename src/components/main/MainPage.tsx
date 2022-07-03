import Filter from "../filter/Filter";
import Search from "../search/Search";
import { MainPageStyled, MainPageSearch } from "./mainPage.styled";

const MainPage: React.FC = () => {
    return (
        <MainPageStyled>
            <MainPageSearch>
                <Search />
                <Filter />
            </MainPageSearch>
        </MainPageStyled>
    )
}

export default MainPage;