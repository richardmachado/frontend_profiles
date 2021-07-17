import React from "react";

import { NavStyles, Links, NavLinks } from "./styles";

function Nav() {
  return (
    <NavStyles>
      <div>
        <NavLinks to="/">Home</NavLinks>
      </div>
      <Links>
        <NavLinks to="/login">Login</NavLinks>
      </Links>
      <Links>
        <NavLinks to="/register">Register</NavLinks>
      </Links>
    </NavStyles>
  );
}

export default Nav;
