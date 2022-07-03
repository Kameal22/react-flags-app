import styled from "styled-components";

export const NavStyled = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.background.nav};
  h1 {
    font-size: 1.6rem;
    margin-left: 5%;
  }
`;
