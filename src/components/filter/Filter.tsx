import { FilterStyledDiv, SelectStyled } from "./filter.styled";
import { regions } from "../../constants/Regions";


const Filter: React.FC = () => {
    return (
        <FilterStyledDiv>
            <SelectStyled defaultValue="value">
                <option value="value" disabled hidden>
                    Filter by Region
                </option>
                {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                ))}
            </SelectStyled>
        </FilterStyledDiv>
    )
}

export default Filter;