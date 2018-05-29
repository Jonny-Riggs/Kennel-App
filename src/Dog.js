import React, { Component } from 'react';

export default class Dog extends Component {



    render() {
        return (
            <article>
                <h2>{this.props.name}</h2>
            </article>
        );
    }
}