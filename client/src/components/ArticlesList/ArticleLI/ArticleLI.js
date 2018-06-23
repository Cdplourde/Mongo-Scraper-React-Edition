import React from "react";
import "./ArticleLI.css";

const ArticleLI = (props) => {
  return(
    <li>
      <div className="card mb-3">
        <div className="card-header bg-primary text-white">
          <div className="d-inline float-left">
            <a href="{{link}}" target="_blank" className="text-white"><i className="fas fa-external-link-alt"></i></a>
          </div> 
          <button className="btn btn-success save d-inline float-right mt-1" key={props.id}>Save Article</button>
        </div>
        <div className="card-body">
          <p className="card-text"></p>
        </div>
      </div>
    </li>  
  )
}

export default ArticleLI;