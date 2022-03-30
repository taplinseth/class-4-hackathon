import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import './App.css';
import ListArticles from './components/ListArticles';
import SearchForm from './SearchForm';

const searchByDate = 'search_by_date?query='
const searchByTag = 'search?tags='
const searchByTitle = 'search?query=';

class App extends Component {

    state = {
      typeChoice: searchByTitle,
      searchType: [searchByDate, searchByTag, searchByTitle],
      articlesArray: []
    }

  
  componentDidMount() {
    this.getApiData();
  }

  getApiData = (input) => {
    fetch(`http://hn.algolia.com/api/v1/${this.state.typeChoice}${input}`)
      .then(response => response.json())
      .then(data => this.setState({articlesArray: data.hits}))
      .catch(err => console.error(err))
  }

  getSearchInput = (input) => {
    console.log(input);
    let searchInput = input;
    this.getApiData(searchInput);
  }


  render() {

    return (
      <div id='news-articles'>
        <h1>News Articles</h1>
          <SearchForm getSearchInput={this.getSearchInput}/>
          <ol>
            <ListArticles articles={this.state.articlesArray} />
          </ol>

          {/* <ArticleCard /> */}
      </div>


    )
  }

}


export default App;