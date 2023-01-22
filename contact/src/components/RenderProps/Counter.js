import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increaseHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        {this.props.children(
          //.render(childern)so p function nat tone yin App.js ka nay p render function u tone ya tal
          // like that render={(count,increaseHandler)=><Component count={count} increaseHandler={increaseHandler}/>}
          this.state.count,
          this.increaseHandler
        )}
      </div>
    );
  }
}

export default Counter;
