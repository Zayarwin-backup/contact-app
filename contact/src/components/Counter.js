import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0,
  };

  increaseOne = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  increaseFive = () => {
    this.increaseOne();
    this.increaseOne();
    this.increaseOne();
    this.increaseOne();
    this.increaseOne();
  };

  render() {
    return (
      <div>
        <p>CountValue - {this.state.count}</p>
        <button onClick={this.increaseFive}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
