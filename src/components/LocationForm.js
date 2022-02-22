import React from 'react';

class LocationForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Move Unicorn To:
                    <select value={this.state.location} onChange={this.handleChange}>
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