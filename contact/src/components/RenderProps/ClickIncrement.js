import React, { Component } from "react";

export class ClickIncrement extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.increaseHandler}
        >
          click {this.props.count} time
        </button>
      </div>
    );
  }
}

export default ClickIncrement;
