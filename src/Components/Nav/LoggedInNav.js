import React, { useState } from "react";

import { NavStyles, Links, NavLinks } from "./styles";

function LoggedInNav() {
  const [username] = useState(localStorage.getItem("username"));
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
