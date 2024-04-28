import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img
          src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
          alt="Loading"
          style={{
            width: "5%",
          }}
        />
      </div>
    );
  }
}

export default Spinner;
