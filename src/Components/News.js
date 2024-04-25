import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let URL = `https://newsapi.org/v2/everything?q=apple&from=2024-04-20&to=2024-04-20&sortBy=popularity&apiKey=b413b0db42c640379dbd0140109c87ef&page=1&pageSize=32`;
    let data = await fetch(URL);
    let oData = await data.json();
    this.setState({
      articles: oData.articles,
      totalResults: 100,
    });
  }

  handleprev = async () => {
    console.log("prev");
    this.setState((prevState) => {
      if (prevState.page > 1) {
        let URL = `https://newsapi.org/v2/everything?q=apple&from=2024-04-20&to=2024-04-20&sortBy=popularity&apiKey=b413b0db42c640379dbd0140109c87ef&page=${
          prevState.page - 1
        }&pageSize=32`;
        fetch(URL)
          .then((data) => data.json())
          .then((oData) => {
            this.setState({
              page: prevState.page - 1,
              articles: oData.articles,
            });
            console.log(this.state.page);
          });
      }
    });
  };

  handlenex = async () => {
    console.log("nex");
    this.setState((prevState) => {
      let URL = `https://newsapi.org/v2/everything?q=apple&from=2024-04-20&to=2024-04-20&sortBy=popularity&apiKey=b413b0db42c640379dbd0140109c87ef&page=${
        prevState.page + 1
      }&pageSize=32`;
      fetch(URL)
        .then((data) => data.json())
        .then((oData) => {
          this.setState({
            page: prevState.page + 1,
            articles: oData.articles,
          });
          console.log(this.state.page);
          console.log(Math.ceil(this.state.totalResults / 32));
        });
    });
  };

  render() {
    return (
      <div className="container mt-2">
        <h2>InfoPulse: Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((ele) => {
            return (
              <div className="col-md-3" key={ele.url}>
                <Newsitem
                  tittle={ele.title ? ele.title.slice(0, 45) : ""}
                  description={
                    ele.description ? ele.description.slice(0, 88) : ""
                  }
                  imgUrl={
                    ele.urlToImage
                      ? ele.urlToImage
                      : "https://img.freepik.com/premium-vector/no-result-found-empty-results-popup-design_586724-96.jpg?w=1060"
                  }
                  url={ele.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleprev}
          >
            &larr; previous
          </button>
          <button
            disabled={
              this.state.page + 1 >= Math.ceil(this.state.totalResults / 32)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handlenex}
          >
            next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
