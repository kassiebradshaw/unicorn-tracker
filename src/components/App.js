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
        { name: "Glittershy", favFood: "apple", color: "pink", location: "barn" },
        { name: "Unicorn2", favFood: "cookies", color: "blue", location: "barn" },
        { name: "Pappy", favFood: "hay", color: "pink", location: "barn" },
        { name: "Gru", favFood: "carrots", color: "yellow", location: "barn" },
        { name: "Harry Potter", favFood: "sugar", color: "red", location: "barn" },
        { name: "Pinky Pie", favFood: "carrots", color: "pink", location: "barn" },
        { name: "Hobbit", favFood: "apple", color: "pink", location: "barn" },
        { name: "Turtle", favFood: "apple", color: "green", location: "barn" },
        { name: "Starlight", favFood: "hay", color: "pink", location: "barn" },
        { name: "Glimmer", favFood: "apple", color: "pink", location: "barn" },
        { name: "Buttercup", favFood: "apple", color: "yellow", location: "barn" },
        { name: "Bluenote", favFood: "carrots", color: "purple", location: "barn" },
        { name: "Bracer Britches", favFood: "apple", color: "pink", location: "barn" },
      ],
    }
  }

  handleUpdateData (unicorn, location, idx) {
    console.log(idx, unicorn, location);
  }

    render() {
      return (
        <div className="App">
          <Header />
          <Main 
          unicornData={this.state.unicornData} 
          handleUpdate={this.handleUpdateData}/>
          <Footer />
        </div>
      );
    }
  }
export default App;