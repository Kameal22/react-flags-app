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

    },
  });
  
  export const {  } = countriesSlice.actions;
  
  export default countriesSlice.reducer;