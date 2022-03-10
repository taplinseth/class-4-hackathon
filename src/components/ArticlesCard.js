import react, {Component} from 'react';
import Articles from './ListArticles';

export default function ArticlesCard(props) {
    return (
        <table class="list-of-articles">
            <tr>{props.getRowData}</tr>
        </table>
    )
}