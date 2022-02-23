import React from 'react';
// import LocationForm from './LocationForm';

class Unicorn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: this.props.location,
            newLocation: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(`The form was submitted. ${this.props.name} has been moved to: ${this.state.newLocation}`);
        this.setState({location: this.state.newLocation});
        // this.props.handleUpdate(this.props.name, this.state.Location, this.props.idx);
    }

    handleChangeLocation(event) {
        this.setState({ newLocation: event.target.value });
    };

    render() {
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <p>Favorite Food: {this.props.favFood}</p>
                <p>Unicorn Color: {this.props.color}</p>
                <p>Location: {this.state.location}</p>

                <form onSubmit={this.handleSubmit}>
                    <label>Move Unicorn To: 
                        <select value={this.state.newLocation} onChange={this.handleChangeLocation}>
                            <option value="barn">Barn</option>
                            <option value="pasture">Pasture</option>
                            <option value="trails">Trails</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Unicorn;