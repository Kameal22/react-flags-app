type SingleCurrency = {
    name: string;
    symbol: string;
} 
   
type Currencies = {
    [key: string]: SingleCurrency;
} 

type Language = {
    name: string;
}

export interface CountryDetails{
    subRegion: string,
    status: string,
    currencies: Currencies,
    languages: Language
}

export interface CountryInterface{
    flag: string,
    name: string,
    population: number,
    region: string,
    capital: string,
    details: CountryDetails
}
