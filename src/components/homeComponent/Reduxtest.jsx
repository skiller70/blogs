import React, { Component } from "react";
import { connect } from "react-redux";
class Reduxtest extends Component {
  constructor(props) {
    super(props);
    this.state = { val: false };
  }

  componentDidMount() {
    this.setState({ val: true });
  }

  render() {
    const ggwp = this.state.val ? "true" : "false";
    if (this.state.val) {
      return (
        <>
          <div>
            <h1> hello bros</h1>
            <h2> hello {this.props.userDetail.name} </h2>

            <h2>check value of boolean {ggwp}</h2>
            <button onClick={this.loadingScreen}> click me </button>
          </div>
        </>
      );
    } else {
      return (
        <div className="flex justify-center items-center">
          <div
            className="animate-spin inline-block w-8 h-8 border-4 border-t-transparent    border-solid border-orange-300 rounded-full"
            role="status"
          >
            <span className="visually-hidden"></span>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProp = (state) => {
  return { userDetail: state.custom.USER_TOKEN_VALUE };
};
export default connect(mapStateToProp)(Reduxtest);
