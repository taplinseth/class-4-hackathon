import { Component } from "react";

export default class Articles extends Component {

    getRowData = dummyObject.hits.map((row)=>{
        return (
            <li style={{listStyle: "none"}}>               
                <tr id="title">{row.title}</tr>
                <tr id="author">{row.author}</tr>
            </li>
        )
    })
}