import React from 'react';
import '../App.css';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unicornData: [
        { name: "glittershy", favFood: "apple", color: "pink", location: "barn" },
        { name: "unicorn2", favFood: "cookies", color: "blue", location: "barn" },
        { name: "pappy", favFood: "hay", color: "pink", location: "barn" },
        { name: "gru", favFood: "carrots", color: "yellow", location: "barn" },
        { name: "harry potter", favFood: "sugar", color: "red", location: "barn" },
        { name: "pinky pie", favFood: "carrots", color: "pink", location: "barn" },
        { name: "hobbit", favFood: "apple", color: "pink", location: "barn" },
        { name: "turtle", favFood: "apple", color: "green", location: "barn" },
        { name: "starlight", favFood: "hay", color: "pink", location: "barn" },
        { name: "glimmer", favFood: "apple", color: "pink", location: "barn" },
        { name: "buttercup", favFood: "apple", color: "yellow", location: "barn" },
        { name: "bluenote", favFood: "carrots", color: "purple", location: "barn" },
        { name: "bracer britches", favFood: "apple", color: "pink", location: "barn" },
      ],
      location: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(`Changing it - ${event.target.value}`)
    this.setState({ location: event.target.value })
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(`Submitting it - ${this.state.location}`);
  }

    render() {
      return (
        <div className="App">
          <Header />
          <Main unicornData={this.state.unicornData} 
          handleChange={this.handleChange()}
          handleSubmit={this.handleSubmit()}/>
          <Footer />
        </div>
      );
    }
  }
export default App;