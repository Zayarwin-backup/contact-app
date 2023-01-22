import React, { Component } from "react";
import upDateComp from "./HighterOrderComp";

class HoverIncre extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <h1
          onMouseOver={() => {
            increment(3);
          }}
        >
          {this.props.name}Hover Increase {count}
          time
        </h1>
      </div>
    );
  }
}

export default upDateComp(HoverIncre);
