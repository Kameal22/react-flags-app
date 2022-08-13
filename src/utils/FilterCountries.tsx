import { CountryInterface } from "../interfaces/CountriesInterface"

export const FilterCountries = (array: CountryInterface[], value: string) => {
    return array.filter((item: CountryInterface) => item.name.toLowerCase().includes(value.toLowerCase()))
}