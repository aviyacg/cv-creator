import { Component } from "react";
import { v4 as newId } from 'uuid';
import InputGroup from "./InputGroup";

import "../styles/Section.css";

class Section extends Component {
  constructor(props) {
    super(props);
    this.inputList = props.inputList;
    this.addable = props.addable ? true : false;
    this.state = { inputGroupKeys: [newId()] };
    this.addInputGroup = this.addInputGroup.bind(this);
    this.deleteInputGroup = this.deleteInputGroup.bind(this);
  }

  addInputGroup() {
    const keys = this.state.inputGroupKeys;
    keys.push(newId())
    this.setState({ inputGroupKeys: keys });
  }

  deleteInputGroup(id) {
    const keys = this.state.inputGroupKeys;
    const index = keys.findIndex(key => key === id);
    keys.splice(index, 1);
    this.setState({ inputGroupKeys: keys });
  }

  render() {
    return (
      <div className="Section">
        <div className="title">
          {this.props.title}
        </div>
        {
          this.state.inputGroupKeys.map(
            key => (<InputGroup
              key={key}
              id={key}
              inputList={this.inputList}
              deleteable={this.addable}
              delete={this.deleteInputGroup}
              onChange={this.props.onChange}
            />)
          )
        }
        {this.addable ? <button onClick={this.addInputGroup}>Add</button> : undefined}
      </div>
    );
  }
}

export default Section;