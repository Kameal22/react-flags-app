import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { CountryInterface } from "../../interfaces/CountriesInterface";

interface Countries {
    countries: CountryInterface[]
}

const initialState: Countries = {
    countries: []
}

export const countriesSlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        fetchCountries: (
            state,
            action: PayloadAction<{
                countries: CountryInterface[]
            }>
          ) => {
            state.countries = action.payload.countries
          },
    },
  });
  
  export const { fetchCountries } = countriesSlice.actions;
  
  export default countriesSlice.reducer;