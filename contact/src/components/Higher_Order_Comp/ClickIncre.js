import React, { Component } from "react";
import upDateComp from "./HighterOrderComp";

class ClickIncre extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button
          onClick={() => {
            increment(5);
          }}
        >
          {this.props.name}Increase {count} times
        </button>
      </div>
    );
  }
}

export default upDateComp(ClickIncre);
