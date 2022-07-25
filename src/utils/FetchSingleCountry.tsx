import axios from "axios";
import { CountryInterface } from "../interfaces/CountriesInterface";

export const fetchSingleCountry = async (URL: string, setCountry: React.Dispatch<React.SetStateAction<CountryInterface | undefined>>) => {
    const { data } = await axios.get(URL);
    const fetchedCountry = data[0];

    const singleCountry: CountryInterface = { flag: fetchedCountry.flags.png, name: fetchedCountry.name.common, population: fetchedCountry.population, region: fetchedCountry.region, capital: fetchedCountry.capital, details: { subRegion: fetchedCountry.subregion, status: fetchedCountry.status, currencies: fetchedCountry.currencies, languages: fetchedCountry.languages } }

    setCountry(singleCountry)
}