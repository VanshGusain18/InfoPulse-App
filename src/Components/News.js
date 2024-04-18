import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  render() {
    return (
      <div>
        this is a new Component.
        <Newsitem />
        <Newsitem />
        <Newsitem />
        <Newsitem />
        <Newsitem />
        <Newsitem />
      </div>
    );
  }
}

export default News;
