import { useParams } from "react-router-dom";
import {
  DetailsStyledDiv,
  CountryDetailsDiv,
  DetailsHeadingDiv,
  Flag,
  Details,
  PreviousCountry,
  NextCountry,
} from "./detailsPage.styled";
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {
  LoadingInfoStyled,
} from "../main/mainPage.styled";
import CountryStatistics from "./Statistics";
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
          <i onClick={findPreviousCountry} className="bi bi-chevron-left" />
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
            Back <i className="bi bi-arrow-left" />
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
            <img src={country?.flag} alt={country?.name} />
          </Flag>

          <Details>
            <h1>{country?.name}</h1>
            <CountryStatistics country={country} languages={languages} currencies={currencies} />
          </Details>
        </CountryDetailsDiv>}
      {countries[currentCountryIdx + 1] === undefined ?
        null
        :
        <NextCountry>
          <i onClick={findNextCountry} className="bi bi-chevron-right" />
        </NextCountry>}

    </DetailsStyledDiv>
  );
};

export default DetailsPage;
