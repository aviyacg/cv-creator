import { Component } from "react";

import "../styles/InputGroup.css";

class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }


  delete() {
    this.props.delete(this.props.id);
  }
  
  render() {
    const { inputList, onChange } = this.props;
    const liList = inputList.map((input, index) => {
      const { placeHolder, type, name } = input;
      return (<input
        key={index}
        type={type}
        placeholder={placeHolder}
        name={name}
        onChange={onChange}
        data-groupid={this.props.id}
      />);
    });
    return (
      <div key={this.props.id} className="InputGroup">
        {liList}
        {this.props.deleteable ? <button onClick={this.delete}>Delete</button> : undefined}
      </div>
    );
  }
}

export default InputGroup;
