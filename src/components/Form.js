import { Component } from "react";
import Section from "./Section";
class Form extends Component {
  render() {
    const infoInputlist = [
      { placeHolder: "First name" },
      { placeHolder: "Last name" },
      { placeHolder: "Title" },
      { placeHolder: "Address" },
      { placeHolder: "Phone number", type: "tel" },
      { placeHolder: "Email", type: "email" },
    ];
    const expInputList = [
      { placeHolder: "Position" },
      { placeHolder: "Company" },
      { placeHolder: "City" },
      { placeHolder: "From year", type: "number" },
      { placeHolder: "Until year", type: "number" }
    ];
    const eduInputList = [
      { placeHolder: "Istitution" },
      { placeHolder: "City" },
      { placeHolder: "Degree" },
      { placeHolder: "Subject" },
      { placeHolder: "From year", type: "number" },
      { placeHolder: "Until year", type: "number" }
    ];
    return (
      <>
        <Section title="Personal Info" inputList={infoInputlist} />
        <Section title="Experience" inputList={expInputList} addable={true} />
        <Section title="Education" inputList={eduInputList} addable={true}/>
      </>
    );
  }
}

export default Form;