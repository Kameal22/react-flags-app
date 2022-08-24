import axios from "axios";
import { CountryInterface } from "../interfaces/CountriesInterface";

export const fetchData = async (URL: string, setCountries: React.Dispatch<React.SetStateAction<CountryInterface[]>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    const response = await axios.get(URL);
    const fetchedCountries = response.data

    const Countries: CountryInterface[] = []

    fetchedCountries.forEach((country: any) => {
        const singleCountry: CountryInterface = {flag: country.flags.png, name: country.name.common, population: country.population, region: country.region, capital: country.capital, details: {subRegion: country.subregion, status: country.status, currencies: country.currencies, languages: country.languages}}

        Countries.push(singleCountry)
    })

    setCountries(Countries)
    setLoading(false);
}