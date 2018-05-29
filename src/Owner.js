import ReactDOM from 'react-dom';
import React, { Component } from 'react';

export default class Owner extends Component {

    state = {
        id: 0,
        name: "Rick Flair",
        phone: "555-1234",
        address: "8088 API Way"
    }

    render() {
        return (
            <article>
                <h2>{this.state.name}</h2>
                <h3>{this.state.phone}</h3>
                <h3>{this.state.address}</h3>
            </article>
        );
    }
}