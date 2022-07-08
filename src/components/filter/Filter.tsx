import { FilterStyledDiv, ResetFiltersStyled, SelectStyled } from "./filter.styled";
import { regions } from "../../constants/Regions";

interface Props {
  value: string,
  changeValue: (value: string) => void;
}

const Filter: React.FC<Props> = ({ changeValue, value }) => {
  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    let selectedValue = e.currentTarget.value;
    changeValue(selectedValue);
  };

  return (
    <FilterStyledDiv>
      <SelectStyled onChange={handleChange} defaultValue="value">
        <option value="value" disabled hidden>
          Filter by Region
        </option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </SelectStyled>
      {value ? <ResetFiltersStyled onClick={() => changeValue("")}>Reset filters</ResetFiltersStyled> : null}
    </FilterStyledDiv>
  );
};

export default Filter;
