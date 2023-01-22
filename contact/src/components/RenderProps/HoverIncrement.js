import React, { Component } from "react";

class HoverIncrement extends Component {
  render() {
    return (
      <div>
        <h1
          onMouseOver={this.props.increaseHandler}
        >
          HoverIncrease {this.props.count} time
        </h1>
      </div>
    );
  }
}

export default HoverIncrement;
