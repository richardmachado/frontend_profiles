import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/DashBoard/Dashboard";
import MyPosts from "./Components/DashBoard/MyPosts";
import AddPosts from "./Components/AddPosts";
import PrivateRoute from "./utils/PrivateRoutes";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        {/* PrivateRoutes */}
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/myposts" component={MyPosts} />
        <PrivateRoute path="/addposts" component={AddPosts} />

        {/* Reroute invalid links to home */}
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}
