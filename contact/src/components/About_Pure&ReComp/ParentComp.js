import React, {
  Component,
  PureComponent,
} from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegularComponent from "./RegularComponent";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Zayarwin",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Zayarlin",
      });
    }, 2000);
  }

  render() {
    console.log(
      "*******************ParentComp*********************"
    );
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <PureComp name={this.state.name} />
        <RegularComponent
          name={this.state.name}
        /> */}
      </div>
    );
  }
}

export default ParentComp;
