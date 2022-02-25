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
        { name: "Izzy Moonbow", favFood: "apple", color: "purple", location: "barn", imgUrl: "https://placeponi.es/300/200/1" },
        { name: "Alphabittle Blossomforth", favFood: "cookies", color: "pink", location: "barn", imgUrl: "https://placeponi.es/300/200/2" },
        { name: "Doctor Horse", favFood: "hay", color: "blue", location: "barn", imgUrl: "https://placeponi.es/300/200/3" },
        { name: "Rarity", favFood: "carrots", color: "gray", location: "barn", imgUrl: "https://placeponi.es/300/200/4" },
        { name: "Saffron Masala", favFood: "sugar", color: "orange", location: "barn", imgUrl: "https://placeponi.es/300/200/5" },
        { name: "Clear Sky", favFood: "carrots", color: "blue", location: "barn", imgUrl: "https://placeponi.es/300/200/6" },
        { name: "Sugar Belle", favFood: "apple", color: "gray", location: "barn", imgUrl: "https://placeponi.es/300/200/7" },
        { name: "Sunset Shimmer", favFood: "apple", color: "pink", location: "barn", imgUrl: "https://placeponi.es/300/200/8" },
        { name: "Bittersweet", favFood: "hay", color: "yellow", location: "barn", imgUrl: "https://placeponi.es/300/200/9" },
        { name: "Lily Lace", favFood: "apple", color: "purple", location: "barn", imgUrl: "https://placeponi.es/300/200/0" },
        { name: "Chancellor Neighsay", favFood: "apple", color: "pink", location: "barn", imgUrl: "https://placeponi.es/300/200/2" },
        { name: "Bluenote", favFood: "carrots", color: "blue", location: "barn", imgUrl: "https://placeponi.es/300/200/3" },
        { name: "Bracer Britches", favFood: "apple", color: "gray", location: "barn", imgUrl: "https://placeponi.es/300/200/4" },
      ],
    }
  }

  // handleUpdateData = (unicorn) => {
  //   console.log("Unicorn in handler", unicorn);
  // }

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