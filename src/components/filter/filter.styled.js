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
