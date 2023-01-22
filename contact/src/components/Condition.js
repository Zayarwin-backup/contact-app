import React, { Component } from "react";

export class Condition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogedIn: false,
    };
  }

  render() {
    return (
      this.state.isLogedIn && (
        <div>Welcome Zayarwin</div>
      )
    );
    //ternary Operator
    // return this.state.isLogedIn ? (
    //   <div>Welcome Zayarwin</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    // let message;
    // if (this.state.isLogedIn) {
    //   message = <div>Welcome Zayarwin</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
  }
}

export default Condition;
