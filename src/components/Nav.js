import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainer>
      <div id="logo">
        <NavLink to="/">
          MovieFinder
        </NavLink>
      </div>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  position: fixed;
  z-index: 999;
  background: hsl(0, 0%, 13%);
  color: whitesmoke;
  margin: 0;
  width: 100%;
  height: auto;
  padding: 1.5em;
  #logo {
    position: relative;
    float: left;
    width: 150px;
    height: auto;
  }
  a {
    color: #fff;
  }
`;