import styled from "styled-components";

export const MainPageStyled = styled.div`
  padding-top: 6vh;
  margin-left: auto;
  margin-right: auto;
  min-height: 90vh;
  background-color: ${({ theme }) => theme.background.container};
  color: ${({ theme }) => theme.textColor.container};
  padding-left: 5%;
  padding-right: 5%;
`;

export const MainPageSearchStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainPageCountriesStyled = styled.div`
  margin-top: 6vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
