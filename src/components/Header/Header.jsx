import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderStyled = styled.header``;

const NavStyled = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    li a {
      /* text-decoration: none; */
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <NavStyled>
        <ul>
          <li>
            <NavLink to={"#"} className="a">
              DeveStore
            </NavLink>
          </li>
          <li>
            <NavLink to={"#"} className="b">
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to={"#"} className="c">
              Marketplace
            </NavLink>
          </li>
          <li>
            <NavLink to={"#"} className="d">
              Artist
            </NavLink>
          </li>
          <li>
            <NavLink to={"#"} className="ea">
              Collection
            </NavLink>
          </li>
        </ul>
      </NavStyled>
    </HeaderStyled>
  );
};

export default Header;
