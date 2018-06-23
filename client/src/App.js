import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Showcase from './components/Showcase/Showcase'
import ArticleLI from './components/ArticlesList/ArticleLI/ArticleLI'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Showcase />
        <section className="container-articles">
          <ul className="articles">
            <ArticleLI />
          </ul>        
        </section>

      </div>
    );
  }
}

export default App;
