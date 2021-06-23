import React from "react";
import LoggedInNav from "./LoggedInNav";

const username = localStorage.getItem("username");

function Dashboard() {
  return (
    <div>
      <LoggedInNav />
      <h1>You're in the dashboard now</h1>
      <h2>Welcome back {username} </h2>
    </div>
  );
}

export default Dashboard;
