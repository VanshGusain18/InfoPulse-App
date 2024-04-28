import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { tittle, description, imgUrl, url } = this.props;
    return (
      <div className="my-2">
        <div className="card" style={{}}>
          <img
            src={imgUrl}
            style={{ height: "9rem", backgroundSize: "cover" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{tittle}...</h5>
            <p className="card-text">{description}...</p>
            <a href={url} className="btn btn-primary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
