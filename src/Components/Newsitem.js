import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        
        let {title,description,imgurl,newsUrl}=this.props;
        return (
        <>
      <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={imgurl==null?"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d0d211578d8c4562ab652371985d96e9":imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                           <h5 className="card-title">{title}</h5>
                           <p className="card-text">{description}</p>
                           <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More...</a>
                    </div>
           </div>
      </div>      
      </>
    )
  }
}

export default Newsitem
