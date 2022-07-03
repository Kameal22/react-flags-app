import styled from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
  width: 100%;
  background-color: ${({ theme }) => theme.background.container};
`;
