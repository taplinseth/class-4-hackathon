import React, { useState } from 'react';

const ListArticles = (props) => {

        return (
          <div>
            <header>
              <h1>Results</h1>
              <ul>{this.state.items.map((item, index)=>{
                return <li key={index} onClick={() => this.delete(index)}>{this.state.items[index]}</li>
              })}</ul>
            </header>
          </div>
        );

}

export default ListArticles;



// ListArticles

// maps over props passed from app to Display Article Card to render each card