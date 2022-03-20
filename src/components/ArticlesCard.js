import React, { Component } from 'react'

class DisplayArticleCard extends Component {

  render() {
    const items = this.props.items

    return (
      <li className="article-list">
        <a id="title"  href={items.url}>{items.title}</a>
        <div id="author-etc"> by {items.author} | {items.points} | {items.created_at} | {items.num_comments} Comments</div>
      </li>
    )
  }
}

export default DisplayArticleCard;
