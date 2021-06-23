import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavStyle = styled.div`
display: flex;
justify-content: center;
align-content: space-between;
box-shadow: 10px 5px 5px grey;
`

function Nav() {
  return (
    <NavStyle>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </NavStyle>
  );
}

export default Nav;
