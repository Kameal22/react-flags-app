import axios from "axios";
import { CountryInterface } from "../interfaces/CountriesInterface";

export const fetchData = async (URL: string, setCountries: React.Dispatch<React.SetStateAction<CountryInterface[]>>) => {
    const response = await axios.get(URL);
    const fetchedCountries = response.data.slice(0, 4)

    const Countries: CountryInterface[] = []

    fetchedCountries.forEach((country: any) => {
        const singleCountry: CountryInterface = {flag: country.flags.png, name: country.name.common, population: country.population, region: country.region, capital: country.capital}

        Countries.push(singleCountry)
    })

    setCountries(Countries)
}