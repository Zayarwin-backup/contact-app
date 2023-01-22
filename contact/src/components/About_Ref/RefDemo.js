import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.cbref = null;
    this.setcbref = (element) => {
      this.cbref = element;
    };
  }
  componentDidMount() {
    //this method is callback ref
    if (this.cbref) {
      this.cbref.focus();
    }
    console.log(this.cbref);
    //this method need to create ref first
    // this.ref.current.focus();
  }
  render() {
    return (
      <div>
        <input
          type='text'
          ref={this.setcbref}
        ></input>
      </div>
    );
  }
}

export default RefDemo;
