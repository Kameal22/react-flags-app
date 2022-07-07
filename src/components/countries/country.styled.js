import styled from "styled-components";

export const CountryStyled = styled.div`
  width: 22%;
  height: 550px;
  background-color: ${({ theme }) => theme.background.country};
  -webkit-box-shadow: -3px 5px 12px -6px rgba(66, 68, 90, 1);
  -moz-box-shadow: -3px 5px 12px -6px rgba(66, 68, 90, 1);
  box-shadow: -3px 5px 12px -6px rgba(66, 68, 90, 1);
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 200px;
  }

  span {
    font-weight: bold;
  }

  h3 {
    margin-bottom: 4vh;
  }

  div {
    width: 80%;
    margin: 2vh auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  p {
    font-size: 0.9em;
  }

  h3:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1550px) {
    width: 26%;
  }

  @media screen and (max-width: 1460px) {
    width: 30%;
  }

  @media screen and (max-width: 1250px) {
    width: 40%;
  }

  @media screen and (max-width: 800px) {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 700px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;
