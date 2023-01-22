import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  focusHandler = () => {
    console.log(this.ref);
  };

  focusInput = () => {
    this.ref.current.focus();
  };
  render() {
    return (
      <div>
        <input type='text' ref={this.ref}></input>
      </div>
    );
  }
}

export default Input;
