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
          // add image input if image is true
          this.props.image ?
            <label>
              <input
                id={id}
                type="file"
                name="image"
                onChange={(e) => {
                  const { id, name } = e.target;
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    console.log({ resurt: reader.result });
                    changeInfo({ groupId: id, name, value: reader.result })
                  };
                  if (file) {
                    console.log({ file });
                    reader.readAsDataURL(file);
                  } else {
                    changeInfo({ groupId: id, name, value: "" });
                  }
                }}
              />
              Choose Image
            </label>
            : undefined
        }
        {
          // add textarea for description if descriptable is true
          this.props.descriptable ?
            <textarea
              id={id}
              name="description"
              placeholder="Description"
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
