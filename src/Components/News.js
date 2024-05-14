import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "12",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=b413b0db42c640379dbd0140109c87ef&page=${this.state.page}&category=${this.props.category}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(URL);
    let oData = await data.json();
    this.setState({
      articles: oData.articles,
      totalResults: oData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }

  // handleprev = () => {
  //   this.setState(
  //     (prevState) => ({
  //       page: prevState.page - 1,
  //     }),
  //     () => {
  //       this.updateNews();
  //     }
  //   );
  // };

  // handlenex = () => {
  //   this.setState(
  //     (prevState) => ({
  //       page: prevState.page + 1,
  //     }),
  //     () => {
  //       this.updateNews();
  //     }
  //   );
  // };

  fetchMoreData = async () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      async () => {
        const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=b413b0db42c640379dbd0140109c87ef&page=${this.state.page}&category=${this.props.category}&pageSize=${this.props.pageSize}`;
        let data = await fetch(URL);
        let oData = await data.json();
        this.setState({
          articles: this.state.articles.concat(oData.articles),
          totalResults: oData.totalResults,
        });
      }
    );
  };

  render() {
    return (
      <div className="container mt-2">
        <div className="text-center mt-2">
          <h2>{`InfoPulse: Top ${
            this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)
          } Headlines`}</h2>
          {this.state.loading && <Spinner />}
        </div>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((ele) => {
                return (
                  <div className="col-md-3" key={ele.url}>
                    {
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
                        source={ele.source.name}
                        author={
                          ele.author !== null && ele.author !== undefined
                            ? ele.author
                            : "unknown"
                        }
                        time={new Date(ele.publishedAt).toGMTString()}
                      />
                    }
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
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
              this.state.page + 1 >=
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handlenex}
          >
            next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
