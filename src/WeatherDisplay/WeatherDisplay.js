import React, { Component } from "react";


export default class WeatherDisplay extends Component {
  render() {
    return (
      <h1>Displaying some weather for: {this.props.zip}</h1>
    );
  }
}
