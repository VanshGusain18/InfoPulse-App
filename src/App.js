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
            <Route path="/">
              <News country="in" category="general" pageSize="12" />
            </Route>
            <Route path="/business">
              <News country="in" category="business" pageSize="12" />
            </Route>
            <Route path="/entertainment">
              <News country="in" category="entertainment" pageSize="12" />
            </Route>
            <Route path="/health">
              <News country="in" category="health" pageSize="12" />
            </Route>
            <Route path="/science">
              <News country="in" category="science" pageSize="12" />
            </Route>
            <Route path="/sports">
              <News country="in" category="sports" pageSize="12" />
            </Route>
            <Route path="/technology">
              <News country="in" category="technology" pageSize="12" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
