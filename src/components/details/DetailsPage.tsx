import { useParams } from "react-router-dom";
import {
  DetailsStyledDiv,
  CountryDetailsDiv,
  DetailsHeadingDiv,
  Flag,
  Details,
  Statistics,
  PreviousCountry,
  NextCountry,
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
import { useNavigate } from "react-router-dom";
import { useSpring } from 'react-spring';

interface Props {
  countries: CountryInterface[]
}

const DetailsPage: React.FC<Props> = ({ countries }) => {
  const [country, setCountry] = useState<CountryInterface>();

  const navigate = useNavigate();
  const { countryName } = useParams();

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1200 }
  })

  useEffect(() => {
    fetchSingleCountry(`${SINGLE_FLAG_URL}/${countryName}`, setCountry, redirectOnError)
  }, [countryName])

  const currentCountryIdx = countries.findIndex(country => country.name === countryName);

  const redirectOnError = () => {
    return navigate('/', { replace: true })
  }

  const findPreviousCountry = () => {
    const previous = countries[currentCountryIdx - 1]
    return navigate(`/country/${previous.name}`, { replace: true })
  }

  const findNextCountry = () => {
    const next = countries[currentCountryIdx + 1]
    return navigate(`/country/${next.name}`, { replace: true })
  }

  const currencies = country?.details.currencies;
  const languages = country?.details.languages;

  return (
    <DetailsStyledDiv>
      {countries[currentCountryIdx - 1] === undefined ?
        null
        :
        <PreviousCountry>
          <i onClick={findPreviousCountry} className="bi bi-chevron-left"></i>
        </PreviousCountry>}

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
      {!country ?
        <LoadingInfoStyled>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </LoadingInfoStyled>
        :
        <CountryDetailsDiv style={props}>
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
      {countries[currentCountryIdx + 1] === undefined ?
        null
        :
        <NextCountry>
          <i onClick={findNextCountry} className="bi bi-chevron-right"></i>
        </NextCountry>}

    </DetailsStyledDiv>
  );
};

export default DetailsPage;
