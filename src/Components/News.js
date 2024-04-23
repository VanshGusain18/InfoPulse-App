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
    let URL = `https://newsapi.org/v2/everything?q=apple&from=2024-04-20&to=2024-04-20&sortBy=popularity&apiKey=b413b0db42c640379dbd0140109c87ef&page=${this.state.page}&pageSize=20`;
    let data = await fetch(URL);
    let oData = await data.json();
    this.setState({
      articles: oData.articles,
    });
  }

  handleprev = async () => {
    let URL = `https://newsapi.org/v2/everything?q=apple&from=2024-04-20&to=2024-04-20&sortBy=popularity&apiKey=b413b0db42c640379dbd0140109c87ef&page=${this.state.page}&pageSize=20`;
    console.log(this.state.page);
    let data = await fetch(URL);
    let oData = await data.json();
    this.setState({
      articles: oData.articles,
      page: this.state.page - 1,
    });
  };

  handlenex = async () => {
    let URL = `https://newsapi.org/v2/everything?q=apple&from=2024-04-20&to=2024-04-20&sortBy=popularity&apiKey=b413b0db42c640379dbd0140109c87ef&page=${this.state.page}&pageSize=20`;
    console.log(this.state.page);
    let data = await fetch(URL);
    let oData = await data.json();
    this.setState({
      articles: oData.articles,
      page: this.state.page + 1,
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
