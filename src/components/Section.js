import { Component } from "react";
import InputGroup from "./InputGroup";

class Section extends Component {
  constructor(props) {
    super(props);
    this.addInputList = this.addInputList.bind(this);
  }
  addInputList() {

  }

  render() {
    return (
      <div className="Section">
        <div className="title">
          {this.props.title}
        </div>
        <InputGroup inputList={this.props.inputList} />
        <button onClick={this.addInputList}>Add</button>
      </div>
    );
  }
}

export default Section;