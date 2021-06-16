import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
