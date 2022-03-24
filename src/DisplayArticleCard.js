import React from 'react';

// hook
const DisplayArticleCard = (props) => {

    return (
        <li style={{ listStyle: "none" }}>
            <h3>{props.story_title} <span>{props.author}</span></h3>
            <h4>{props._tags}</h4>
            <h6>{props.created_at}</h6>
        </li>
    )
}

export default DisplayArticleCard;

// DisplayArticleCard

// Render props into stylish view for the user
// titple is clickable & opens article in new tab
// Display points, author, date created & url
// 


