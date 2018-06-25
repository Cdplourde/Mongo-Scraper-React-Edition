import React from "react";
import "./ArticleLI.css";

class ArticleLI extends React.Component {
  render() {
    return(
      <li>
        <div className="card mb-3">
          <div className="card-header bg-primary text-white">
            <div className="d-inline float-left">
              <a href={this.props.link} target="_blank" className="text-white">{this.props.title} <i className="fas fa-external-link-alt"></i></a>
            </div> 
            <button className="btn btn-success save d-inline float-right mt-1" data-id={this.props.id}>Save Article</button>
          </div>
          <div className="card-body">
            <p className="card-text">{this.props.description}</p>
          </div>
        </div>
      </li>          
    )
  }
}

function handleSaveArticle() {

}

export default ArticleLI;