import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  render() {
    return (
      <div className="container mt-2">
        this is a news Component.
        <div className="row">
          <div className="col-md-3">
            <Newsitem tittle="tittle" description="desc" />
          </div>
          <div className="col-md-3">
            <Newsitem tittle="tittle" description="desc" />
          </div>
          <div className="col-md-3">
            <Newsitem tittle="tittle" description="desc" />
          </div>
          <div className="col-md-3">
            <Newsitem tittle="tittle" description="desc" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Newsitem tittle="tittle" description="desc" />
          </div>
          <div className="col-md-3">
            <Newsitem tittle="tittle" description="desc" />
          </div>
          <div className="col-md-3">
            <Newsitem tittle="tittle" description="desc" />
          </div>
          <div className="col-md-3">
            <Newsitem tittle="tittle" description="desc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
