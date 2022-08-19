import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: ${({ bgColor }) => bgColor};
  color: #fff;
  border: ${({ borderColor }) =>
    borderColor ? `solid 1px ${borderColor}` : "none"};
  padding: 0 30px;
  line-height: 40px;
  border-radius: 5px;
  font-weight: 700;
`;
const Button = (props) => {
  const { bgColor, children } = props;
  return <ButtonStyled bgColor={bgColor}>{children}</ButtonStyled>;
};

Button.propTypes = {
  bgColor: PropTypes.string,
  txtColor: PropTypes.string,
  borderColor: PropTypes.string,
};

Button.defaultProps = {
  bgColor:
    "linear-gradient(85.76deg, rgba(225, 45, 45, 0.0945738) -105.02%, #E12D2D 10.94%, rgba(1, 72, 255, 0) 121.57%)",
  txtColor: "#FFF",
  borderColor: undefined,
};

export default Button;
