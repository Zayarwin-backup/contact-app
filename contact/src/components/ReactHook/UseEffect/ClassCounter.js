import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `{You clicked ${this.state.count} times}`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updating the component");
      document.title = `{You clicked ${this.state.count} times}`;
    }
  }

  counterHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.name}
          onChange={(e) =>
            this.setState({
              name: e.target.value,
            })
          }
        ></input>
        <button onClick={this.counterHandler}>
          click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounter;
