import styled from "styled-components";

export const NavStyled = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background.nav};
  color: ${({ theme }) => theme.textColor.nav};
  h1 {
    font-size: 1.6rem;
    margin-left: 5%;
  }
`;
