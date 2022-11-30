import { Component } from "react";
import Section from "./Section";

import "../styles/Form.css";


class Form extends Component {
  render() {
    const infoInputlist = [
      { placeHolder: "First name", name: "firstName"},
      { placeHolder: "Last name", name: "lastName" },
      { placeHolder: "Address", name: "address" },
      { placeHolder: "Phone number", type: "tel", name: "phoneNumber" },
      { placeHolder: "Email", type: "email", name: "email" },
    ];
    const expInputList = [
      { placeHolder: "Position", name: "postion" },
      { placeHolder: "Company", name: "company" },
      { placeHolder: "City", name: "city" },
      { placeHolder: "From year", type: "number", name: "fromYear" },
      { placeHolder: "Until year", type: "number", name: "toYear" }
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
      <div className="Form">
        <Section title="Personal Info" inputList={infoInputlist} onChange={this.props.onInfoChange} />
        <Section title="Experience" inputList={expInputList} addable={true} onChange={this.props.onExpChange} />
        <Section title="Education" inputList={eduInputList} addable={true}/>
      </div>
    );
  }
}

export default Form;