import { useParams } from "react-router-dom";
import {
  DetailsStyledDiv,
  CountryDetailsDiv,
  DetailsHeadingDiv,
  Flag,
  Details,
  Statistics,
  BorderCountries,
} from "./detailsPage.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

const DetailsPage: React.FC = () => {
  const { countryName } = useParams();

  const countries = useSelector(
    (state: RootState) => state.countries.countries
  );

  const shownCountry = countries.find(
    (country) => country.name === countryName
  );

  const currencies = shownCountry?.details.currencies;

  return (
    <DetailsStyledDiv>
      <DetailsHeadingDiv>
        <button>
          Back <i className="bi bi-arrow-left"></i>
        </button>
      </DetailsHeadingDiv>
      <CountryDetailsDiv>
        <Flag>
          <img src={shownCountry?.flag}></img>
        </Flag>

        <Details>
          <h1>{shownCountry?.name}</h1>
          <Statistics>
            <ul>
              <li>Population: {shownCountry?.population}</li>
              <li>Region: {shownCountry?.region}</li>
              <li>Sub region: {shownCountry?.details.subRegion}</li>
              <li>Capital: {shownCountry?.capital}</li>
            </ul>

            <ul>
              <li>Status: {shownCountry?.details.status}</li>
              {currencies ? (
                <li>
                  Currencies:{" "}
                  {Object.values(currencies).map((currency) => {
                    return <li>{currency.name}</li>;
                  })}
                </li>
              ) : (
                <li>No data provided</li>
              )}
              <li>LANGUAGES</li>
            </ul>
          </Statistics>
          <BorderCountries></BorderCountries>
        </Details>
      </CountryDetailsDiv>
    </DetailsStyledDiv>
  );
};

export default DetailsPage;
