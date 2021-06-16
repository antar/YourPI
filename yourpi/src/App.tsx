import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/sign-up" exact>
          <h1>Sign Up</h1>
        </Route>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;