import { Component } from "react";

import "../styles/InputGroup.css";

class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }


  delete() {
    const { deleteGroup, id } = this.props;
    deleteGroup({groupId: id});
  }
  
  render() {
    const { inputList, onChange } = this.props;
    const liList = inputList.map((input, index) => {
      const { placeHolder, type, name } = input;
      return (<input
        key={index}
        id={this.props.id}
        type={type}
        placeholder={placeHolder}
        name={name}
        onChange={onChange}
      />);
    });
    return (
      <div key={this.props.id} className="InputGroup">
        {liList}
        {
          this.props.deleteable ?
            <button onClick={this.delete}>
              Delete
              </button>
            : undefined
        }
      </div>
    );
  }
}

export default InputGroup;
