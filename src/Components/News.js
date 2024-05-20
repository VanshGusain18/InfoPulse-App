import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    updateNews();
  }, []);

  const updateNews = async () => {
    props.setProgress(10);
    const URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page}&category=${props.category}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(URL);
    props.setProgress(40);
    let oData = await data.json();
    props.setProgress(70);
    setArticles(oData.articles);
    setTotalResults(oData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    const URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page}&category=${props.category}&pageSize=${props.pageSize}`;
    let data = await fetch(URL);
    let oData = await data.json();
    setArticles(articles.concat(oData.articles));
    setTotalResults(oData.totalResults);
  };

  return (
    <div className="container">
      <div className="text-center" style={{ marginTop: "60px" }}>
        <h2>{`InfoPulse: Top ${
          props.category.charAt(0).toUpperCase() + props.category.slice(1)
        } Headlines`}</h2>
        {loading && <Spinner />}
      </div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((ele) => {
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
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
