import { Component } from "react";
import InputGroup from "./InputGroup";

class Section extends Component {
  render() {
    return (
      <div className="Section">
        <div className="title">
          {this.props.title}
        </div>
        <InputGroup inputList={this.props.inputList} />
      </div>
    );
  }
}

export default Section;