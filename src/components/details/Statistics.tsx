import { Statistics } from "./detailsPage.styled";
import { noDataProvided } from "./helpers";
import { CountryInterface } from "../../interfaces/CountriesInterface";
import { Currencies, Language } from "../../interfaces/CountriesInterface";

interface Props {
    country: CountryInterface | undefined
    currencies: Currencies | undefined
    languages: Language | undefined
}

const CountryStatistics: React.FC<Props> = ({ country, currencies, languages }) => {
    return (
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
    )
}

export default CountryStatistics;