import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News country="in" category="general" pageSize="12" />
            </Route>
            <Route exact path="/general">
              <News country="in" category="general" pageSize="12" />
            </Route>
            <Route exact path="/business">
              <News country="in" category="business" pageSize="12" />
            </Route>
            <Route exact path="/entertainment">
              <News country="in" category="entertainment" pageSize="12" />
            </Route>
            <Route exact path="/health">
              <News country="in" category="health" pageSize="12" />
            </Route>
            <Route exact path="/science">
              <News country="in" category="science" pageSize="12" />
            </Route>
            <Route exact path="/sports">
              <News country="in" category="sports" pageSize="12" />
            </Route>
            <Route exact path="/technology">
              <News country="in" category="technology" pageSize="12" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
