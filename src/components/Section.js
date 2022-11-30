import { Component } from "react";
import { v4 as newId } from 'uuid';
import InputGroup from "./InputGroup";

class Section extends Component {
  constructor(props) {
    super(props);
    this.inputList = props.inputList;
    this.addable = props.addable ? true : false;
    this.state = { inputGroupKeys: [newId()] };
    this.addInputGroup = this.addInputGroup.bind(this);
  }

  addInputGroup() {
    this.setState({ inputGroupKeys: this.state.inputGroupKeys.concat(newId()) });
  }

  render() {
    return (
      <div className="Section">
        <div className="title">
          {this.props.title}
        </div>
        {this.state.inputGroupKeys.map(key => <InputGroup key={key} inputList={this.inputList} />)}
        {this.addable ? <button onClick={this.addInputGroup}>Add</button> : undefined}
      </div>
    );
  }
}

export default Section;