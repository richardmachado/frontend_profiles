import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 10px 5px 5px grey;
  margin-bottom: 5px;
`;

const Links = styled.div`
  margin-left: 20px;
`;

const NavLinks = styled(Link)`
  text-decoration: none;
`;

function Nav() {
  return (
    <NavStyle>
      <div>
        <NavLinks to="/">Home</NavLinks>
      </div>
      <Links>
        <NavLinks to="/login">Login</NavLinks>
      </Links>
      <Links>
        <NavLinks to="/register">Register</NavLinks>
      </Links>
    </NavStyle>
  );
}

export default Nav;
