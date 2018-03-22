import React, { Component } from "react";
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import '../../node_modules/bootswatch/dist/lux/bootstrap.css';
import { Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap';

import logo from "../../src/logo.svg";
import "./App.css";

const PLACES = [
  { name: 'Columbia', zip: 21044 },
  { name: 'Baltimore', zip: 21202 },
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
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              React Simple Weather App
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={this.state.activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}>
                {PLACES.map((place, index) => (
                  <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={this.state.activePlace} zip={PLACES[this.state.activePlace].zip} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
