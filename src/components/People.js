import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import uuid from "uuidv4";
import Loader from "react-loader-spinner";

let pageNum = 1;

export class People extends React.Component {
  constructor(props) {
    super(props);
    console.log("checking props: ", this.props.busy);
    this.state = {
      peoples: [],
      busy: this.props.busy,
      page: 0,
      pagination: []
    };
  }

  // handlePageNext(page) {
  //   if (this.page === null) this.page = 1;
  //   this.page = +1;
  //   pageNum++;
  //   console.log("pageNum from handle func is: " + pageNum);
  // }

  fetchSWAPI = () => {
    console.log(this.state.busy, "changed?");
    fetch("https://swapi.co/api/people/?page=" + pageNum)
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data);
        let next = data.next;
        console.log("next is : ", next);
        this.setState({ pagination: next });
        this.setState({ busy: false });
        console.log(this.state.busy, "changed?");
        let peoples = data.results.map(pic => {
          return (
            <Container key={uuid()}>
              <Row>
                <Col
                  md={{ span: 12, offset: 0 }}
                  key={uuid()}
                  className="allFilms"
                >
                  <h2 className="nameOfThing">{pic.name}</h2>
                  <p>Height: {pic.height}</p>
                  <p>Hair Colour: {pic.hair_color}</p>
                  <p>Eye colour: {pic.eye_color}</p>
                  <p>Gender: {pic.gender}</p>
                </Col>
              </Row>
            </Container>
          );
        });
        this.setState({ peoples: peoples });
      })
      .catch(function(error) {
        console.log(error.number + ": " + error.message);
      })
      .finally(function() {
        console.log("finished");
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
    return (
      <div className="container1">
        <Loader
          type="ThreeDots"
          color=""
          height={50}
          width={400}
          offset={150}
          className="loaderCon col-centered spinz"
          visible={this.state.busy}
        />
        <div className="container2">{this.state.peoples}</div>
      </div>
    );
  }
}

/*        <Router>
            <Link to={"?page=" + (this.state.pagination)} onClick={() => this.handlePageNext(this.state.page)}>Next page</Link>
            </Router>
            <Route path={"?page=" + (this.state.pagination)} component={People} key={uuid()}/>
            */
