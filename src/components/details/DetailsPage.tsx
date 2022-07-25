import { useParams } from "react-router-dom";
import {
  DetailsStyledDiv,
  CountryDetailsDiv,
  DetailsHeadingDiv,
  Flag,
  Details,
  Statistics,
} from "./detailsPage.styled";
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {
  LoadingInfoStyled,
} from "../main/mainPage.styled";
import { noDataProvided } from "./helpers";
import { useEffect, useState } from "react";
import { CountryInterface } from "../../interfaces/CountriesInterface";
import { fetchSingleCountry } from "../../utils/FetchSingleCountry";
import { SINGLE_FLAG_URL } from "../../constants/API_URL";

const DetailsPage: React.FC = () => {
  const [country, setCountry] = useState<CountryInterface>();

  const { countryName } = useParams();

  useEffect(() => {
    fetchSingleCountry(`${SINGLE_FLAG_URL}/${countryName}`, setCountry)
  }, [])

  const currencies = country?.details.currencies;
  const languages = country?.details.languages;

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
      {country === undefined ?
        <LoadingInfoStyled>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </LoadingInfoStyled> : <CountryDetailsDiv>
          <Flag>
            <img src={country?.flag}></img>
          </Flag>

          <Details>
            <h1>{country?.name}</h1>
            <Statistics>
              <ul>
                <li>
                  <span>Population:</span> {country?.population}
                </li>
                <li>
                  <span>Region:</span> {country?.region}
                </li>
                <li>
                  <span>Sub region:</span> {country?.details.subRegion}
                </li>
                <li>
                  <span>Capital:</span> {country?.capital}
                </li>
              </ul>

              <ul>
                <li>
                  <span>Status:</span> {country?.details.status}
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
                  noDataProvided()
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
                  noDataProvided()
                )}
              </ul>
            </Statistics>
          </Details>
        </CountryDetailsDiv>}
    </DetailsStyledDiv>
  );
};

export default DetailsPage;
