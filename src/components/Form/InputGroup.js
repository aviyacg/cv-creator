import { Component } from "react";

import '../../styles/InputGroup.css';

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
    const { id, inputList, changeInfo } = this.props;
    const liList = inputList.map((input, index) => {
      const { placeHolder, type, name } = input;
      return (<input
        key={index}
        id={id}
        type={type}
        placeholder={placeHolder}
        name={name}
        onChange={(e) => {
          const { id, name, value } = e.target;
          changeInfo({ groupId: id, name, value });
        }}
      />);
    });
    return (
      <div key={this.props.id} className="InputGroup">
        {liList}
        {
          this.props.descriptable ?
            <textarea
              name="description"
              placeholder="Description"
              id={id}
              onInput={(e) => {
                const { id, name, value } = e.target;
                changeInfo({ groupId: id, name, value });
              }}></textarea>
            : undefined
        }
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
