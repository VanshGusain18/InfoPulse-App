import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { tittle, description } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem;" }}>
          <img
            src="https://image.cnbcfm.com/api/v1/image/107388575-1710750162068-gettyimages-2084805375-AFP_34LT3PY.jpeg?v=1710750760&w=1920&h=1080"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
