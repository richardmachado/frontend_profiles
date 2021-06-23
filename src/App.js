import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        {/* PrivateRoutes */}
        <Route path="/dashboard" component={Dashboard} />
        {/* Reroute invalid links to home */}
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}
