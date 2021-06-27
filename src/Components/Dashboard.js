import React, { useState } from "react";
import LoggedInNav from "./LoggedInNav";

function Dashboard() {
  const [first_name] = useState(localStorage.getItem("first_name"));
  if (first_name === null) {
    return (
      <>
        <LoggedInNav />
        <h1>No username found</h1>
      </>
    );
  } else {
    return (
      <>
        <LoggedInNav />
        <h1>Hello {first_name}</h1>
      </>
    );
  }
}

export default Dashboard;
