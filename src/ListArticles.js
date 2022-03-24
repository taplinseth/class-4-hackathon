import React, { useState } from 'react';

const ListArticles = (props) => {

        return (
          <div>
              <h1>Articles</h1>
              <ul>{this.state.articlesArray.map((item, index)=>{
                return <li key={index}>{this.state.items[index]}</li>
              })}</ul>
          </div>
        );

}

export default ListArticles;



// ListArticles

// maps over props passed from app to Display Article Card to render each card