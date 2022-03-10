import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      articlesArray: []
    }
  }

  componentDidMount() {
    fetch("http://hn.algolia.com/api/v1/search?query=Javascript")
      .then(response => response.json())
      .then(data => this.setState({articlesArray: data.hits}))
      .catch(err => console.error(err))
  }

  

  render() {
    return (
          <h3>News Articles</h3>
          // <ol>{this.state.articlesArray}</ol>
    )
  }

}


export default App;