import React, { useState } from "react";

import { NavStyles, Links, NonLinks } from "./styles";

function LoggedInNav() {
  const [username] = useState(localStorage.getItem("username"));
  return (
    <>
      <NavStyles>
        <Links to="addposts">Add Post</Links>
        <Links to="/myposts">My Posts</Links>
        <Links to="dashboard">All Posts</Links>
        <NonLinks>Welcome back {username} </NonLinks>
        <Links to="/" onClick={() => localStorage.clear()}>
          Logout
        </Links>
      </NavStyles>
    </>
  );
}

export default LoggedInNav;
