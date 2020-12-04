import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import history from "../history";
import Login from "./pages/login";
import Test from "../components/test";
import Slider from "../components/Slider";
import SignUp from "./SignUp";
import Agents from "./Agents";
import ProductInfo from "./ProductInfo";
import Product from "./pages/Product";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/test" component={Test} />
            <Route path="/slider" component={Slider} />
            {/* <Route path="/signup" component={SignUp} /> */}
            {/* <Route path="/agents" component={Agents} /> */}
            <Route path="/pro" component={ProductInfo} />
            <Route path="/product" component={Product} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
