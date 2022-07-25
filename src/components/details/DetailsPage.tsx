import { useParams } from "react-router-dom";
import {
  DetailsStyledDiv,
  CountryDetailsDiv,
  DetailsHeadingDiv,
  Flag,
  Details,
  Statistics,
} from "./detailsPage.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {
  LoadingInfoStyled,
} from "../main/mainPage.styled";

const DetailsPage: React.FC = () => {
  const { countryName } = useParams();

  const countries = useSelector(
    (state: RootState) => state.countries.countries
  );

  const shownCountry = countries.find(
    (country) => country.name === countryName
  );

  const currencies = shownCountry?.details.currencies;
  const languages = shownCountry?.details.languages;

  return (
    <DetailsStyledDiv>
      <DetailsHeadingDiv>
        <Link
          style={{
            textDecoration: "none",
            color: "inherit",
            width: "15%",
            marginLeft: "2%",
          }}
          to="/"
        >
          <button>
            Back <i className="bi bi-arrow-left"></i>
          </button>
        </Link>
      </DetailsHeadingDiv>
      {shownCountry === undefined ?
        <LoadingInfoStyled>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </LoadingInfoStyled> : <CountryDetailsDiv>
          <Flag>
            <img src={shownCountry?.flag}></img>
          </Flag>

          <Details>
            <h1>{shownCountry?.name}</h1>
            <Statistics>
              <ul>
                <li>
                  <span>Population:</span> {shownCountry?.population}
                </li>
                <li>
                  <span>Region:</span> {shownCountry?.region}
                </li>
                <li>
                  <span>Sub region:</span> {shownCountry?.details.subRegion}
                </li>
                <li>
                  <span>Capital:</span> {shownCountry?.capital}
                </li>
              </ul>

              <ul>
                <li>
                  <span>Status:</span> {shownCountry?.details.status}
                </li>

                {currencies ? (
                  <div>
                    <li>
                      <span>Currencies:</span>
                    </li>
                    {Object.values(currencies).map((currency) => {
                      return (
                        <li key={currency.name} style={{ marginLeft: ".3em" }}>
                          {currency.name}
                        </li>
                      );
                    })}
                  </div>
                ) : (
                  <li>
                    <span>No data provided</span>
                  </li>
                )}

                {languages ? (
                  <div>
                    <li>
                      <span>Languages:</span>
                    </li>
                    {Object.values(languages).map((lang) => {
                      return (
                        <li key={lang} style={{ marginLeft: ".3em" }}>
                          {lang}
                        </li>
                      );
                    })}
                  </div>
                ) : (
                  <li>
                    <span>No data provided</span>
                  </li>
                )}
              </ul>
            </Statistics>
          </Details>
        </CountryDetailsDiv>}
    </DetailsStyledDiv>
  );
};

export default DetailsPage;
