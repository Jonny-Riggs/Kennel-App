import ReactDOM from 'react-dom';
import React, { Component } from 'react';

export default class Location extends Component {

    state = {
        id: 0,
        name: "Nashville North",
        address: "8088 API Way"
    }

    render() {
        return (
            <article>
                <h2>{this.props.name}</h2>
                <h3>{this.props.address}</h3>
            </article>
        );
    }
}