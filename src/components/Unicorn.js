import React from 'react';
import LocationForm from './LocationForm';

class Unicorn extends React.Component {
    render() {
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <p>Favorite Food: {this.props.favFood}</p>
                <p>Unicorn Color: {this.props.color}</p>
                <p>Location: {this.props.location}</p>

                <LocationForm />
            </div>
        );
    }
}

export default Unicorn;