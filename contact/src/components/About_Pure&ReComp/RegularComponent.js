import React, { Component } from "react";

class RegularComponent extends Component {
  render() {
    console.log("Regular Component");
    return (
      <div>
        Regualr Component {this.props.name}
      </div>
    );
  }
}

export default RegularComponent;
