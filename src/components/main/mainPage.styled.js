import styled from "styled-components";

export const LoadingInfoStyled = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MainPageStyled = styled.div`
  padding-top: 6vh;
  padding-bottom: 6vh;
  margin-left: auto;
  margin-right: auto;
  min-height: 90vh;
  background-color: ${({ theme }) => theme.background.container};
  color: ${({ theme }) => theme.textColor.container};
  padding-left: 2%;
  padding-right: 2%;
`;

export const MainPageSearchStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background.container};
  position: sticky;
  top: 0;
  padding-top: 3vh;
  padding-bottom: 3vh;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const MainPageCountriesStyled = styled.div`
  margin-top: 6vh;
  width: 100%;
  display: grid;
  grid-template-columns: 22% 22% 22% 22%;
  justify-content: space-between;
  gap: 6vh;

  @media screen and (max-width: 1499px) {
    grid-template-columns: 25% 25% 25%;
  }

  @media screen and (max-width: 1250px) {
    grid-template-columns: 40% 40%;
  }

  @media screen and (max-width: 899px) {
    grid-template-columns: 60%;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 90%;
    justify-content: center;
    align-items: center;
  }
`;
