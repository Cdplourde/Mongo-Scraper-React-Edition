import React from "react";
import "./Showcase.css";

const Showcase = (props) => {
  return (
    <section className="container-fluid text-center showcase d-flex">
      <div className="row align-self-center m-auto">
        <div className="col">
          <h1>Mongo Scraper</h1>
          <h3>New York Times Edition</h3>
        </div>
      </div>
    </section>
  )
}

export default Showcase;