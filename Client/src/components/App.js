import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import history from "../history";
import Login from "./pages/login";
import test from "../components/test";
const page = () => {
  return <h1>pageee</h1>;
};

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/loggedin" component={test} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
