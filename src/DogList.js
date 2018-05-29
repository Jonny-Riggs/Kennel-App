import React, { Component } from 'react';
import Dog from "./Dog"

export default class DogList extends Component {

    state = {
        dogs: [{
            id: 0,
            name: "Scout",
            locationId: 1,
            ownerId: 1
        },
        {
            id: 1,
            name: "Slinky",
            locationId: 0,
            ownerId: 2
        },
        {
            id: 2,
            name: "Maya",
            locationId: 1,
            ownerId: 2
        },
        {
            id: 3,
            name: "Milkshake",
            locationId: 0,
            ownerId: 1
        }
    ]
    }

    render() {
        return (
            <div>

            {this.state.dogs.filter(dog => {
                return dog.locationId === this.props.locationId
            })
            .map(dog => (
                <Dog name={dog.name} key={dog.id} />
            ))}
            </div>
        );
    }
}