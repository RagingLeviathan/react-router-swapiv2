import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Films } from "./components/Films";
import { People } from "./components/People";
import { Planets } from "./components/Planets";
import { Species } from "./components/Species";
import { Starships } from "./components/Starships";
import { Vehicles } from "./components/Vehicles";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar, Nav } from "react-bootstrap";
import uuid from "uuidv4";
import PropTypes from "prop-types";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busy: true,
      bird: "swellow",
      testProp: "this is my default message."
    };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar
            bg="light"
            expand="lg"
            className="navStyle"
          >
            <Navbar href="/" className="nameStyle">
              SWAPI / React
            </Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/films" className="nav-link">
                  Films
                </Link>
                <Link to="/people" className="nav-link">
                  People
                </Link>
                <Link to="/planets" className="nav-link">
                  Planets
                </Link>
                <Link to="/species" className="nav-link">
                  Species
                </Link>
                <Link to="/starships" className="nav-link">
                  Starships
                </Link>
                <Link to="/vehicles" className="nav-link">
                  Vehicles
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="container fill">
            <Route path="/" component={Home} exact key={uuid()} />

            <Route
              path="/films"
              render={props => (
                <Films {...props} title={`Props through render`} busy={this.state.busy} testProp={this.state.testProp} bird={this.state.bird}/>
              )}
              key={uuid()}
            />

            <Route
              path="/people"
              render={props => (
                <People {...props} title={`Props through render`} busy={this.state.busy} />
              )}
            />

            <Route path="/planets" component={Planets} key={uuid()} />

            <Route path="/species" component={Species} key={uuid()} />

            <Route path="/starships" component={Starships} key={uuid()} />

            <Route path="/vehicles" component={Vehicles} key={uuid()} />
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  busy: PropTypes.bool
};
