import React from "react";
import LoggedInNav from "./LoggedInNav";

const username = localStorage.getItem("username");
const name = localStorage.getItem("first_name");

function Dashboard() {
  if (!username) {
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
        <h1>Hello {name}</h1>
      </>
    );
  }
}

export default Dashboard;
