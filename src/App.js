import React, { Component } from 'react';
import './App.css';

import SearchForm from "./SearchForm";

class App extends Component {

  constructor() {
    super();
    this.state = {
      articlesArray: []
    }
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then( res => {
          const articlesArray = res.data
          this.setState({ articlesArray })
      })
  }

  

  render() {
    return (
      <ol>{this.state.articlesArray.map((article, index) => {
        return (
          <SearchForm />
        )
      })}</ol>
    )
  }

}


export default App;