import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News country="in" category="sports" pageSize="20" />
      </div>
    );
  }
}
