import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Campgrounds from "./components/Camgrounds";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import NewCampground from "./components/New";

class App extends Component {
  render() {
    const navBarItem = [
      { label: "Campgrounds", to: "/campgrounds" },
      { label: "Login", to: "/login" },
      { label: "Signup", to: "/sign" }
    ];
    const brand = "YelpCamp 2.0";
    return (
      <React.Fragment>
        <Navbar navItems={navBarItem} brand={brand} />
        <Switch>
          <Route path="/not-found" component={NotFound} />
          <Route path="/campgrounds/new" component={NewCampground} />
          <Route path="/campgrounds/:id" />
          <Route path="/campgrounds" exact component={Campgrounds} />
          <Redirect to="/campgrounds" exact from="/" />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
