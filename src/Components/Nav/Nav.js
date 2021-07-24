import React from "react";

import { NavStyles, Links } from "./styles";

function Nav() {
  return (
    <NavStyles>
      <div>
        <Links to="/">Home</Links>
      </div>

      <Links to="/login">Login</Links>

      <Links to="/register">Register</Links>
    </NavStyles>
  );
}

export default Nav;
