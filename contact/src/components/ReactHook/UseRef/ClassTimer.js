import React, { Component } from "react";

export class ClassTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prev) => {
        return { timer: prev.timer + 1 };
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  stopTime = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div>
        <span>{this.state.timer}</span>
        <button onClick={this.stopTime}>
          Stop
        </button>
      </div>
    );
  }
}

export default ClassTimer;
