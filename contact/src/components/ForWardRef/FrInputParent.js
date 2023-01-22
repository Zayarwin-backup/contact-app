import React, { Component } from "react";
import FrInput from "./FrInput";

class FrInputParent extends Component {
  constructor(props) {
    super(props);
    this.forwardRef = React.createRef();
  }

  clickHandler = () => {
    this.forwardRef.current.focus();
  };

  render() {
    return (
      <div>
        <FrInput ref={this.forwardRef} />
        <button onClick={this.clickHandler}>
          FocusMe
        </button>
      </div>
    );
  }
}

export default FrInputParent;
