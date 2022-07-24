import {
  FilterStyledDiv,
  ResetFiltersStyled,
  SelectStyled,
} from "./filter.styled";
import { regions } from "../../constants/Regions";
import { useState } from "react";

interface Props {
  value: string;
  changeValue: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<Props> = ({ changeValue, value }) => {
  const [formValue, setFormValue] = useState("Filter by Region");

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setFormValue(e.currentTarget.value);
    changeValue(e.currentTarget.value);
  };



  const resetForm = () => {
    setFormValue("Filter by Region");
    changeValue("")
  }

  return (
    <FilterStyledDiv>
      <SelectStyled onChange={handleChange} value={formValue}>
        <option value="Filter by Region" disabled hidden>
          Filter by region
        </option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </SelectStyled>
      {value ? (
        <ResetFiltersStyled onClick={() => resetForm()}>
          Reset filters
        </ResetFiltersStyled>
      ) : null}
    </FilterStyledDiv>
  );
};

export default Filter;
