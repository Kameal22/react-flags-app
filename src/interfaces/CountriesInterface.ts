export interface CountryDetails{
    nativeName: any,
    subRegion: string,
    status: string,
    currencies: any,
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
