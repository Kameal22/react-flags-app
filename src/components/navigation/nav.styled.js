import styled from "styled-components";

export const NavStyled = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background.nav};
  color: ${({ theme }) => theme.textColor.nav};

  a {
    width: 20%;

    @media screen and (max-width: 1250px) {
      width: 30%;
    }

    @media screen and (max-width: 899px) {
      width: 40%;
    }

    @media screen and (max-width: 750px) {
      width: 50%;
    }
  }
  h1 {
    font-size: 1.4rem;
    margin-left: 5%;

    @media screen and (max-width: 899px) {
      font-size: 1.2rem;
    }
  }
`;
