import { FilterStyledDiv, SelectStyled } from "./filter.styled";
import { regions } from "../../constants/Regions";

interface Props {
  changeValue: (value: string) => void;
}

const Filter: React.FC<Props> = ({ changeValue }) => {
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
    </FilterStyledDiv>
  );
};

export default Filter;
