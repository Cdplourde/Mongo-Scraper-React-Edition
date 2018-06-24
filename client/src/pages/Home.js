import React, { Component } from "react";
import Navbar from '../components/Navbar/Navbar';
import Showcase from '../components/Showcase/Showcase';
import ArticleLI from '../components/ArticlesList/ArticleLI/ArticleLI';
import API from "../utils/API"

class Home extends Component {

  componentDidMount() {
    API.getArticles().then(res => console.log(res));
  }

  render() {
    return(
      <div className="App">
        <Navbar />
        <Showcase />
        <section className="container-articles">
          <ul className="articles">
            <ArticleLI />
          </ul>        
        </section>
      </div>
    )
  }

  renderArticles() {
    API.getArticles()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
}

export default Home;