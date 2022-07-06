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

    &:hover {
      cursor: pointer;
    }
  }

  i {
    position: absolute;
    left: 12px;
    top: 48px;
  }
`;

export const CountryDetailsDiv = styled.div`
  border: 2px solid ivory;
  width: 80%;
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
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
  border: 4px solid green;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Statistics = styled.ul`
  border: 2px solid magenta;
`;

export const BorderCountries = styled.ul`
  border: 2px solid teal;
`;
