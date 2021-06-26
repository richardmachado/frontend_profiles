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

const Links = styled.li`
  list-style-type: none;
  margin-left: 20px;
`;

const NavLinks = styled(Link)`
  text-decoration: none;
`;

function LoggedInNav() {
  return (
    <NavStyles>
      <NavLinks to="/" onClick={() => localStorage.clear()}>
        Logout
      </NavLinks>

      <Links>Welcome back {username} </Links>
    </NavStyles>
  );
}

export default LoggedInNav;
