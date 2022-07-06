type SingleCurrency = {
    name: string;
    symbol: string;
} 
   
type Currencies = {
    [key: string]: SingleCurrency;
} 

export interface CountryDetails{
    nativeName: any,
    subRegion: string,
    status: string,
    currencies: Currencies,
    languages: any
}

export interface CountryInterface{
    flag: string,
    name: string,
    population: number,
    region: string,
    capital: string,
    details: CountryDetails
}
