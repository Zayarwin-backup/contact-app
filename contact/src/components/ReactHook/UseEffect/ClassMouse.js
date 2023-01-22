import React, { Component } from "react";

export class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  onMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  componentDidMount() {
    window.addEventListener(
      "mousemove",
      this.onMouseMove
    );
  }

  render() {
    return (
      <div>
        Mouse x - {this.state.x} y -{" "}
        {this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
