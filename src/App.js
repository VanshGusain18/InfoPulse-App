import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                key="general"
                country="in"
                category="general"
                pageSize="12"
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                key="general"
                country="in"
                category="general"
                pageSize="12"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                key="business"
                country="in"
                category="business"
                pageSize="12"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                key="entertainment"
                country="in"
                category="entertainment"
                pageSize="12"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                key="health"
                country="in"
                category="health"
                pageSize="12"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                key="science"
                country="in"
                category="science"
                pageSize="12"
              />
            </Route>
            <Route exact path="/sports">
              ``
              <News
                setProgress={this.setProgress}
                key="sports"
                country="in"
                category="sports"
                pageSize="12"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                key="technology"
                country="in"
                category="technology"
                pageSize="12"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
