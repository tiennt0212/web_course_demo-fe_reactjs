import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import Header from "../components/Header";

const MainLayoutStyled = styled.div`
  background-color: ${colors.darkBlue};
  color: #fff;
`;

const Container = styled.div`
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
`;

const MainLayout = ({ children }) => {
  return (
    <MainLayoutStyled>
      <Header />
      <Container>{children}</Container>
    </MainLayoutStyled>
  );
};

export default MainLayout;
