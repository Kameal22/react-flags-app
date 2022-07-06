import { useParams } from "react-router-dom";
import { DetailsStyledDiv, CountryDetailsDiv, DetailsHeadingDiv, Flag, Details, Statistics, BorderCountries } from "./detailsPage.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

const DetailsPage: React.FC = () => {
  const { countryName } = useParams();

  const countries = useSelector((state: RootState) => state.countries.countries);

  const shownCountry = countries.find(country => country.name === countryName);

  console.log(shownCountry?.details.currencies)
  // console.log(shownCountry?.details.languages)

  return <DetailsStyledDiv>
    <DetailsHeadingDiv>
      <button>Back</button>
      <i className="bi bi-arrow-left"></i>
    </DetailsHeadingDiv>
    <CountryDetailsDiv>

      <Flag><img src={shownCountry?.flag}></img></Flag>

      <Details>
        <h1>{shownCountry?.name}</h1>
        <Statistics>
          {/* <p>Native name: {shownCountry?.details.nativeName.common}</p> */}
          <p>Population: {shownCountry?.population}</p>
          <p>Region: {shownCountry?.region}</p>
          <p>Sub region: {shownCountry?.details.subRegion}</p>
          <p>Capital: {shownCountry?.capital}</p>
          <p>Status: {shownCountry?.details.status}</p>
        </Statistics>
        <BorderCountries></BorderCountries>
      </Details>

    </CountryDetailsDiv>
  </DetailsStyledDiv>;
};

export default DetailsPage;
