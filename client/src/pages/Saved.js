import React, { Component } from "react";
import Navbar from '../components/Navbar/Navbar';
import Showcase from '../components/Showcase/Showcase';
import ArticleLI from '../components/ArticlesList/ArticleLI/ArticleLI';
import API from "../utils/API"

class Saved extends Component {

  state = {
    articles: null
  }

  componentDidMount() {
    this.renderArticles();
  }

  render() {
    return(
      <section className="container-articles">
        <ul className="articles">
          {this.state.articles}
        </ul>        
      </section>
    )
  }

  renderArticles() {
    API.getArticles()
      .then(res => {
        console.log(res)
        const articlesArr = res.map(article => {
          if (article.saved === true) {
            return <ArticleLI key={article._id} description={article.description} title={article.title} link={article.link} id={article._id} saved={article.saved} />
          }
        });
        this.setState({articles: articlesArr})
      })
      .catch(err => console.log(err));
  }
}

export default Saved;