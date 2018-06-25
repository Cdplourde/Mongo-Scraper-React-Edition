import React, { Component } from "react";
import ArticleLI from '../components/ArticlesList/ArticleLI/ArticleLI';
import API from "../utils/API"

class Home extends Component {

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
          if (article.saved === false) {
            return <ArticleLI key={article._id} description={article.description} title={article.title} link={article.link} id={article._id} />
          }
        });
        this.setState({articles: articlesArr})
      })
      .catch(err => console.log(err));
  }
}

export default Home;