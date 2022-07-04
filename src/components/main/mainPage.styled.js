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

export const MainPageSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
