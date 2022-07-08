import styled from "styled-components";

export const DetailsStyledDiv = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${({ theme }) => theme.background.container};
  color: ${({ theme }) => theme.textColor.container};
  position: relative;
`;

export const DetailsHeadingDiv = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6vh;
  position: relative;

  button {
    padding: 8px;
    border-radius: 4px;
    width: 10%;
    background-color: #333533;
    border: none;
    color: white;
    -webkit-box-shadow: -3px 5px 12px -6px rgba(66, 68, 90, 1);
    -moz-box-shadow: -3px 5px 12px -6px rgba(66, 68, 90, 1);
    box-shadow: -3px 5px 12px -6px rgba(66, 68, 90, 1);
    position: relative;

    &:hover {
      cursor: pointer;
    }
  }

  i {
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
  }
`;

export const CountryDetailsDiv = styled.div`
  width: 85%;
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: ${({ theme }) => theme.background.details};
`;

export const Flag = styled.div`
  width: 45%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90%;
    height: 380px;
  }
`;

export const Details = styled.div`
  width: 55%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Statistics = styled.ul`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;

  ul {
    div {
      display: flex;

      li {
        margin: 0;
        margin-top: 2vh;
      }
    }
  }

  li {
    list-style: none;
    margin-top: 2vh;
    font-size: 0.95em;
  }

  span {
    font-weight: bold;
  }
`;

export const BorderCountries = styled.ul``;
