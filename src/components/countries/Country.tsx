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
      <div>
        <h3>{name}</h3>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </div>
    </CountryStyled>
  );
};

export default Country;
