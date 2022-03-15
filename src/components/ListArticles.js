
   
import React, { Component } from 'react';
import ArticlesCard from './ArticlesCard'

class ListArticles extends Component {
    constructor(props){
        super(props)
        this.state = {
        articlesArray: []
        }
    }

    render() {
      return(
        <div>
          <header id="article-header">
            <div id="article-header-content">Hacker News</div>  
          </header>
          <div id="articles">
              {this.props.articles.map((article) => {return <DisplayArticleCard items={article} />
      })}
          </div>
        </div>
      );
    }
}


export default ListArticles;


