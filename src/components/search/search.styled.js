import styled from "styled-components";

export const SearchStyled = styled.div`
  width: 25%;
`;

export const FormStyled = styled.form`
  position: relative;

  i {
    position: absolute;
    left: 10px;
    top: 12px;
    color: grey;
  }
`;

export const InputStyled = styled.input`
  padding: 12px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid lightgray;
  text-indent: 10%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    margin-left: 5%;
  }
`;
