import { CountryInterface } from "../interfaces/CountriesInterface";

export const filterData = (data: CountryInterface[], filterValue: string) => {
    return data.filter((country) => country.region.toLowerCase().includes(filterValue));
}