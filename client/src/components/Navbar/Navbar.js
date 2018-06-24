import React from "react";
import "./Navbar.css"

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <a href="/" className="navbar-brand">Mongo Scraper</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a href="/" className="nav-link">Home</a>
          </li>   
          <li className="nav-item active">
            <a href="/saved" className="nav-link">Saved Articles</a>
          </li>
          <li className="nav-item">
            <button className="btn btn-danger mx-2 scrape">Scrape Articles</button>
          </li>  
        </ul>
      </div>
    </nav>    
  )
}

export default Navbar;