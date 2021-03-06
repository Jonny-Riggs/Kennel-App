import React, { Component } from 'react';
import Location from "./Location"

export default class LocationList extends Component {

    state = {
        locations: [{
            id: 0,
            name: "Nashville North",
            address: "1011 Binary Court"
        },
        {
            id: 1,
            name: "Nashville South",
            address: "1209 WOOO Court"
        }]
    }

    render() {
        return (
            <div>
            {this.state.locations.map(location => (
                <Location locationId={location.id} name={location.name} address={location.address}/>
            ))}
            </div>
        );
    }
}