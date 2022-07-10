import styled from "styled-components";

export const DetailsStyledDiv = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: ${({ theme }) => theme.background.container};
  color: ${({ theme }) => theme.textColor.container};
  position: relative;
  overflow: auto;
`;

export const DetailsHeadingDiv = styled.div`
  width: 85%;
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

    @media screen and (max-width: 1250px) {
      width: 15%;
    }

    @media screen and (max-width: 899px) {
      width: 17%;
    }

    @media screen and (max-width: 750px) {
      width: 30%;
    }

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

  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 899px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1vh;
  }

  @media screen and (max-width: 750px) {
    width: 99%;
  }
`;

export const Flag = styled.div`
  width: 45%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  @media screen and (max-width: 899px) {
    width: 70%;
  }

  @media screen and (max-width: 750px) {
    width: 95%;
  }

  img {
    width: 90%;
    height: 380px;

    @media screen and (max-width: 1200px) {
      height: 320px;
    }

    @media screen and (max-width: 899px) {
      width: 90%;
      height: 240px;
    }

    @media screen and (max-width: 750px) {
      height: 210px;
      width: 95%;
    }
  }
`;

export const Details = styled.div`
  width: 55%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    padding: 2%;
  }

  h1 {
    @media screen and (max-width: 1200px) {
      font-size: 1.5rem;
      margin-top: 6vh;
    }

    @media screen and (max-width: 899px) {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 899px) {
    width: 65%;
  }

  @media screen and (max-width: 750px) {
    width: 90%;
  }
`;

export const Statistics = styled.ul`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 899px) {
    width: 100%;
  }

  ul {
    @media screen and (max-width: 1200px) {
      font-size: 0.85rem;
    }
    @media screen and (max-width: 899px) {
      font-size: 0.75rem;
    }
    div {
      display: flex;

      li {
        margin: 0;
        margin-top: 2vh;

        @media screen and (max-width: 1200px) {
          font-size: 0.85rem;
        }
        @media screen and (max-width: 899px) {
          font-size: 0.75rem;
        }
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
