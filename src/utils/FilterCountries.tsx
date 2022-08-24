import { CountryInterface } from "../interfaces/CountriesInterface"

const includesIgnoredCase = (firstVal: string, secondVal: string) => firstVal.toLowerCase().includes(secondVal.toLowerCase())


const equalsIgnoredCase = (firstVal: string, secondVal: string) => firstVal.toLowerCase() === secondVal.toLowerCase()


export const FilterCountries = (array: CountryInterface[], value: string, chosenRegion?: string) => {
    if (chosenRegion) {
        return array.filter((item: CountryInterface) => includesIgnoredCase(item.name, value) && equalsIgnoredCase(item.region, chosenRegion))
    } else {
        return array.filter((item: CountryInterface) => includesIgnoredCase(item.name, value))
    }
}