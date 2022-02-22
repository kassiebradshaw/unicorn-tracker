import React from 'react';
import './App.css';
import Main from './components/Main.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      selectedUnicorn: {},
      
      location: ["barn", "pasture", "trails"],
      unicornData: [
        {name: "glittershy", favFood: "apple", color: "pink", location: "barn"},
        {name: "unicorn2", favFood: "cookies", color: "blue", location: "barn"},
        {name: "pappy", favFood: "hay", color: "pink", location: "barn"},
        {name: "gru", favFood: "carrots", color: "yellow", location: "barn"},
        {name: "harry potter", favFood: "sugar", color: "red", location: "barn"},
        {name: "pinky pie", favFood: "carrots", color: "pink", location: "barn"},
        {name: "hobbit", favFood: "apple", color: "pink", location: "barn"},
        {name: "turtle", favFood: "apple", color: "green", location: "barn"},
        {name: "starlight", favFood: "hay", color: "pink", location: "barn"},
        {name: "glimmer", favFood: "apple", color: "pink", location: "barn"},
        {name: "buttercup", favFood: "apple", color: "yellow", location: "barn"},
        {name: "bluenote", favFood: "carrots", color: "purple", location: "barn"},
        {name: "bracer britches", favFood: "apple", color: "pink", location: "barn"},
      ],
    }
  }

  updateLocation = () => {
    this.setState()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main unicornData={this.state.unicornData}/>
        <Footer />
      </div>
    );
  }
}
export default App;