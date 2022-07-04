import { CountryStyled } from "./country.styled";
import { CountryInterface } from "../../interfaces/CountriesInterface";

const Country: React.FC<CountryInterface> = ({
  flag,
  name,
  capital,
  region,
  population,
}) => {
  return (
    <CountryStyled>
      <img alt="Flag" src={flag} />
      <h2>{name}</h2>
      <p>
        <span>Population:</span> {population}
      </p>
      <p>
        <span>Region:</span> {region}
      </p>
      <p>
        <span>Capital:</span> {capital}
      </p>
    </CountryStyled>
  );
};

export default Country;
