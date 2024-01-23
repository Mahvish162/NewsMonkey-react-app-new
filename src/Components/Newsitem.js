import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgurl, newsUrl, author, date ,source } = this.props;
    return (
      <>
        <div>
          <div className="card">
            <img
              src={
                imgurl == null
                  ? "https://newsapi.org/v2/top-headlines?country={this.propps.country}&category=entertainment&apiKey=d0d211578d8c4562ab652371985d96e9"
                  : imgurl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
                  {source}
                </span>
              <h5 className="card-title">
                {title}
                
              </h5>
              <p className="card-text">{description}</p>
              <div className="card-footer">
                <small className="text-body-secondary">
                  By {author == null ? "unknown" : author} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </div>
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-dark"
              >
                Read More...
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
