import { Component } from "react";

class InputGroup extends Component {
  render() {
    const { inputList } = this.props;
    const liList = inputList.map((input, index) => {
      const { placeHolder, type } = input;
      return (<input key={index} type={type} placeholder={placeHolder} />);
    });
    return (
      <div className="InputGroup">
        {liList}
      </div>
    );
  }
}

export default InputGroup;