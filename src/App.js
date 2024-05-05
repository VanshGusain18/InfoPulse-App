import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class App extends Component {
  pageSize = 12;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                country="in"
                category="general"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/general">
              <News
                key="general"
                country="in"
                category="general"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                country="in"
                category="business"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                country="in"
                category="entertainment"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/health">
              <News
                key="health"
                country="in"
                category="health"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                country="in"
                category="science"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                country="in"
                category="sports"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                country="in"
                category="technology"
                pageSize={this.pageSize}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
