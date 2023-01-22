import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Zayarwin",
    };
    console.log("LifeCycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      "LifeCycleA getDerivedStateFromProps"
    );
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  render() {
    console.log("lifecycleA render");
    return (
      <div>
        LifeCycleA
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
