import React from "react";

const upDateComp = (OrginalComp) => {
  class NewComp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        time: 0,
      };
    }

    increseHandle = (increaseNumber) => {
      this.setState((prev) => {
        return {
          time: prev.time + increaseNumber,
        };
      });
    };

    render() {
      return (
        <OrginalComp
          count={this.state.time}
          increment={this.increseHandle}
          {...this.props}
        />
      );
    }
  }
  return NewComp;
};
export default upDateComp;
