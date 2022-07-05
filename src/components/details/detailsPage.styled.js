import styled from "styled-components";

export const DetailsStyledDiv = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${({ theme }) => theme.background.container};
  color: ${({ theme }) => theme.textColor.container};
`;
