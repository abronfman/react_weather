import React, { Component } from "react";
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';

import logo from "../../src/logo.svg";
import "./App.css";

const PLACES = [
  { name: 'Columbia', zip: 21044 },
  { name: 'Baltimore', zip: 21209 },
  { name: 'San Jose', zip: 94088 },
  { name: 'Austin', zip: 73301 }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the weather app</h1>
        </header>
        <p className="App-intro">
          Some intro text here
        </p>
        <div>
          {PLACES.map((place, index) => (
            <button
              key={index}
              onClick={() => {
                this.setState(() => ({
                  activePlace: index
                }));
              }}>
              {place.name}</button>
          ))}
          <WeatherDisplay
            key={this.state.activePlace}
            zip={PLACES[this.state.activePlace].zip} />
        </div>
      </div>
    );
  }
}

export default App;
