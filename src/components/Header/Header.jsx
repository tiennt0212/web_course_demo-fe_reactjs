import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../styles/colors";
import { SearchBar } from "../Input";
import Button from "../Button";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  width: 100%;
  margin: 0 auto;
  color: ${colors.secondaryTxt};
`;

const NavStyled = styled.nav`
  ul {
    display: flex;
    align-items: center;
    li {
      margin-left: 32px; /* Space between Navbar items */
      font-size: 14px;
      font-weight: 400;
      a {
        text-decoration: none; /* Remove default CSS for <a> */
        color: inherit;
      }
      .active {
        /* CSS for the current selecting item */
        font-weight: 700;
      }
    }
    li:first-child {
      /* The first Navbar item has a different style from others */
      margin-left: 0px;
      font-size: 25px;
      font-weight: 500;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <NavStyled>
        <ul>
          <li>
            <NavLink to={"/"}>DeveStore</NavLink>
          </li>
          <li>
            <NavLink to={"/explore"}>Explore</NavLink>
          </li>
          <li>
            <NavLink to={"/marketplace"}>Marketplace</NavLink>
          </li>
          <li>
            <NavLink to={"/artist"}>Artist</NavLink>
          </li>
          <li>
            <NavLink to={"/collection"}>Collection</NavLink>
          </li>
        </ul>
      </NavStyled>
      <SearchBar />
      <Button>Connect</Button>
    </HeaderStyled>
  );
};

export default Header;
