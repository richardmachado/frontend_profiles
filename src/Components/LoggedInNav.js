import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const username = localStorage.getItem("username");

const NavStyles = styled.div`
  display: flex;
  justify-content: center;
  align-content: space-between;
  box-shadow: 10px 5px 5px grey;
`;

function LoggedInNav() {
  return (
    <NavStyles>
      <Link to="/" onClick={() => localStorage.clear()}>
        Logout
      </Link>

      <li>Welcome back {username} </li>
    </NavStyles>
  );
}

export default LoggedInNav;
