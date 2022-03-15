import React, { Component } from 'react'

class DisplayArticleCard extends Component {

  render() {
    const items = this.props.items

    return (
      <li className="article-list">
        <div id="title">{items.title}</div>
        <div id="author-etc"> by {items.author} | {items.num_comments} Comments</div>
      </li>
    )
  }
}

export default DisplayArticleCard;
