import React from "react";
import Loader from "react-loader-spinner";

//let counter = 0;

export default class LoaderComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busy: this.props.busy
    };
  }

  //depreciated life cycle
  // UNSAFE_componentWillReceiveProps({busy}) {
  //   this.setState({...this.state,busy})
  // }

  //getDerivedStateFromProps & componentDidUpdate are the new lifecycle
  //replacements for the above
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.busy !== prevState.busy) {
      return { busy: nextProps.busy };
    } else return null;
  }

  // componentDidUpdate(prevProps, prevState) {
  //  // this.setState({prevProps.busy : prevState.busy});
  // }

  render() {
    /*
    console.log(
      `the state of busy in render # ${++counter} : `,
      this.state.busy
    );*/
    return (
      <div className="container1 ">
        <Loader
          type="ThreeDots"
          color=""
          height={50}
          width={400}
          offset={200}
          visible={this.state.busy}
          className="loaderCon col-centered spinz"
        />
      </div>
    );
  }
}
