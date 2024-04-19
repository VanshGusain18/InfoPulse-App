import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  render() {
    return (
      <div className="container mt-2">
        this is a news Component.
        <div className="row">
          <div className="col-md-3">
            <Newsitem
              tittle="tittle"
              description="desc"
              imgUrl="https://ichef.bbci.co.uk/news/1024/branded_news/E52A/production/_133166685_gettyimages-2147846193.jpg"
            />
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
