import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  margin-top: auto; /* Place the footer at the bottom when the MainLayout is flex column*/
  height: 72px;
  width: 100%;
  border: solid 1px red;
`;

const Footer = () => {
  return <FooterStyled>TODO: FOOTER</FooterStyled>;
};

export default Footer;
