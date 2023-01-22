import React, { Component } from "react";
import Input from "./Input";

class FocuInput extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }

  focusHandler = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.focusHandler}>
          Focus Input
        </button>
      </div>
    );
  }
}

export default FocuInput;
