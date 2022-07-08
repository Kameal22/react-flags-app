import styled from "styled-components";

export const FilterStyledDiv = styled.div`
  width: 16%;
  position: relative;

  @media screen and (max-width: 800px) {
    width: 25%;
  }

  @media screen and (max-width: 700px) {
    width: 40%;
  }
`;

export const SelectStyled = styled.select`
  padding: 12px;
  border-radius: 6px;
  border: 1px solid lightgray;
  width: 100%;
  appearance: none;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const ResetFiltersStyled = styled.button`
  width: 50%;
  padding: 4px;
  margin-top: 1vh;
  border-radius: 4px;
  background-color: #333533;
  border: none;
  color: white;
  -webkit-box-shadow: -3px 5px 12px -6px rgba(66, 68, 90, 1);
  -moz-box-shadow: -3px 5px 12px -6px rgba(66, 68, 90, 1);
  box-shadow: -3px 5px 12px -6px rgba(66, 68, 90, 1);

  &:hover {
    cursor: pointer;
  }
`;
