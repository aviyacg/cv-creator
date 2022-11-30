import { Component } from "react";

class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }


  delete() {
    this.props.delete(this.props.id);
  }
  
  render() {
    const { inputList } = this.props;
    const liList = inputList.map((input, index) => {
      const { placeHolder, type } = input;
      return (<input key={index} type={type} placeholder={placeHolder} />);
    });
    return (
      <div key={this.props.key} className="InputGroup">
        {liList}
        {this.props.deleteable ? <button onClick={this.delete}>Delete</button> : undefined}
      </div>
    );
  }
}

export default InputGroup;
