import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoaderComp from "./LoaderComp";
import uuid from "uuidv4";
import createStore from 'redux';

export class Films extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      movies: [],
      busy: this.props.busy,
    };
  }

  fetchSWAPI = () => {
    fetch("https://swapi.co/api/films")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ busy: false });
        let movies = data.results.map(pic => {
          return (
            <Container key={uuid()}>
              <Row>
                <Col className="allFilms">
                  <h2 className="nameOfThing">{pic.title}</h2>
                  <p>{pic.opening_crawl}</p>
                </Col>
              </Row>
            </Container>
          );
        });
        this.setState({
          movies: movies
        });
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        console.log("finished fetch.");
      });
  };

  componentDidMount() {
    this._isMounted = true;
    this.fetchSWAPI();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    console.log(store.getState());
    return (
      <div className="container1">
        <LoaderComp busy={this.state.busy}/>
        <div className="container2">{this.state.movies}</div>
      </div>
    );
  }
}
