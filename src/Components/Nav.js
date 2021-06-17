import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link tag={Link} to="/">
        Home
      </Link>
      <Link tag={Link} to="/login">
        Login
      </Link>
      <Link tag={Link} to="/register">
        Register
      </Link>
    </div>
  );
}

export default Nav;
