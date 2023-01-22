import React, { Component } from "react";

export class IntervalClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.add, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  add = () => {
    this.setState((prev) => ({
      count: this.state.count + 1,
    }));
  };

  render() {
    return <div>{this.state.count}</div>;
  }
}

export default IntervalClass;
