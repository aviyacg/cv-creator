import { Component } from "react";
import Section from "./Section";
class Form extends Component {
  render() {
    const infoInputlist = [
      { placeHolder: "First name" },
      { placeHolder: "Last name" },
      { placeHolder: "Phone number", type: "tel" },
    ];
    return (
      <Section title="Personal Info" inputList={infoInputlist}/>
    );
  }
}

export default Form;