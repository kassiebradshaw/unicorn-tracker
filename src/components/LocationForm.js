import React from 'react';

class LocationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newLocation: ''
        }
    }

    changeLocation (event) {
        console.log(`Changing it - ${event.target.value}`)
        this.setState({ location: event.target.value })
      };

    render() {
        return (
            <form id={this.props.key} onSubmit={this.handleSubmit}>
                <label>Move Unicorn To:
                    {/* <select value={this.state.location} onChange={this.handleChange}> */}
                    <select value="location" onChange={this.changeLocation()}>
                        <option value="barn">Barn</option>
                        <option value="pasture">Pasture</option>
                        <option value="trails">Trails</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default LocationForm;