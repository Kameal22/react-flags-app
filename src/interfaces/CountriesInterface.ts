type SingleCurrency = {
    name: string;
    symbol: string;
} 
   
type Currencies = {
    [key: string]: SingleCurrency;
} 

type SingleNativeName = {
    official: string;
    common: string;
}

type NativeNames = {
    [key: string]: SingleNativeName;
}

export interface CountryDetails{
    nativeName: NativeNames,
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
