import React, {Component} from "react";
import "./ArticleLI.css";

class ArticleLI extends Component {

    state = {
      disabled: false
    }

  render() {
    return(
      <li>
        <div className="card mb-3">
          <div className="card-header bg-primary text-white">
            <div className="d-inline float-left">
              <a href={this.props.link} target="_blank" className="text-white">{this.props.title} <i className="fas fa-external-link-alt"></i></a>
            </div> 
            {/* <button className="btn btn-success save d-inline float-right mt-1" onClick={this.handleSaveClick} data-id={this.props.id} disabled={this.state.disabled}>Save Article</button> */}
            {this.renderButtons()}
          </div>
          <div className="card-body">
            <p className="card-text">{this.props.description}</p>
          </div>
        </div>
      </li>          
    )
  }

  handleSaveClick = () => {
    this.setState({disabled: true})
  }

  renderButtons = () => {
    if (this.props.saved) {
      return (
        <div>
          <button class="btn btn-danger destroy d-inline float-right mt-1" data-id="{{_id}}">Delete Article</button>
          <button class="btn btn-warning notes d-inline float-right mt-1 mr-2" data-id="{{_id}}" data-toggle="modal" data-target="#exampleModal">Notes</button>
        </div>
      )
    }
    else {
      return <button className="btn btn-success save d-inline float-right mt-1" onClick={this.handleSaveClick} data-id={this.props.id} disabled={this.state.disabled}>Save Article</button>
    }
  }

}



export default ArticleLI;