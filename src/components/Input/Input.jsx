import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const InputStyled = styled.input`
  background-color: transparent;
  color: inherit;
  border: solid 1px ${colors.secondaryTxt};
  border-radius: 4px;
  padding: 8px;

  &:focus {
    outline: none;
  }

  &::-webkit-search-cancel-button {
    /* Hide the close button in the input field */
    -webkit-appearance: none;
  }
`;

const Input = (props) => {
  return <InputStyled {...props} />;
};

export default Input;
