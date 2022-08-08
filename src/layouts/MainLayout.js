import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { Header, Footer } from "../components";

const MainLayoutStyled = styled.div`
  background-color: ${colors.darkBlue};
  color: #fff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Column layout: Header -> Web Content -> Footer */

  max-width: 1024px; /* Web content was wrappered in 1024px container */
  margin: 0 auto; /* Web content was centered on the web horizontal */
  min-height: 100vh; /* Web content is spread over the web height */

  /* Avoid web content sticking to the browser edge when the viewport width is less than 1024px */
  box-sizing: border-box;
  padding: 0 62px;
`;

const MainLayout = ({ children }) => {
  return (
    <MainLayoutStyled>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </MainLayoutStyled>
  );
};

export default MainLayout;
