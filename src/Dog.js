import ReactDOM from 'react-dom';
import React, { Component } from 'react';

export default class Dog extends Component {

    state = {
        id: 0,
        ownerId: 0,
        locationId: 0,
        name: "Scout"
    }

    render() {
        return (
            <article>
                <h2>{this.state.name}</h2>
            </article>
        );
    }
}