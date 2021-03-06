import React from 'react';
import Card from 'react-bootstrap/Card';

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
        this.props.handleUpdate(this.props.unicorn, this.state.newLocation);
        alert(`The form was submitted. ${this.props.name} has been moved to: ${this.state.newLocation}`);
    }

    handleChangeLocation(event) {
        this.setState({ newLocation: event.target.value });
    };

    render() {
        return (
            <Card style={{backgroundColor:`${this.props.color}`}} key={this.props.idx} className="
            ">
                <Card.Img variant="top" src={this.props.imgUrl}/>
                <Card.Body>
                <Card.Title>Name: {this.props.name}</Card.Title>
                <Card.Text>Favorite Food: {this.props.favFood}</Card.Text>
                <Card.Text>Unicorn Color: {this.props.color}</Card.Text>
                <Card.Text>Current location: {this.props.location}</Card.Text>

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
                </Card.Body>
            </Card>
        );
    }
}

export default Unicorn;