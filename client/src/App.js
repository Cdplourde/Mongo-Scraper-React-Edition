import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';
import Home from './pages/Home'
import Saved from './pages/Saved'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Showcase />
        <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
