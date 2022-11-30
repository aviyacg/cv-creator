import { Component } from "react";
import Section from "./Section";

import "../styles/Form.css";


class Form extends Component {
  constructor(props) {
    super(props);

    this.changePersonal = this.changePersonal.bind(this);
    this.changeExp = this.changeExp.bind(this);
    this.changeEdu = this.changeEdu.bind(this);
    this.deleteExp = this.deleteExp.bind(this);
    this.deleteEdu = this.deleteEdu.bind(this);
  }

  changePersonal({ groupId, name, value }) {
    const { changeInfo } = this.props;
    const sectionName = 'personal';
    changeInfo({ sectionName, groupId, name, value });
  }

  changeExp({ groupId, name, value }) {
    const { changeInfo } = this.props;
    const sectionName = 'experience';
    changeInfo({ sectionName, groupId, name, value });
  }

  deleteExp({ groupId }) {
    const { deleteGroup } = this.props;
    const sectionName = 'experience';
    deleteGroup({ sectionName, groupId });
  }

  changeEdu({ groupId, name, value }) {
    const { changeInfo } = this.props;
    const sectionName = 'education';
    changeInfo({ sectionName, groupId, name, value });
  }
  
  deleteEdu({ groupId }) {
    const { deleteGroup } = this.props;
    const sectionName = 'education';
    deleteGroup({ sectionName, groupId });
  }


  render() {
    const personalInputlist = [
      { placeHolder: "First name", name: "firstName" },
      { placeHolder: "Last name", name: "lastName" },
      { placeHolder: "Address", name: "address" },
      { placeHolder: "Phone number", name: "phoneNumber", type: "tel" },
      { placeHolder: "Email", name: "email", type: "email" },
    ];
    const expInputList = [
      { placeHolder: "Position", name: "position" },
      { placeHolder: "Company", name: "company" },
      { placeHolder: "City", name: "city" },
      { placeHolder: "From year", name: "fromYear", type: "number" },
      { placeHolder: "Until year", name: "untilYear", type: "number" },
    ];
    const eduInputList = [
      { placeHolder: "Istitution", name: "institution" },
      { placeHolder: "City", name: "city" },
      { placeHolder: "Degree", name: "degree" },
      { placeHolder: "Subject", name: "subject" },
      { placeHolder: "From year", name: "fromYear", type: "number" },
      { placeHolder: "Until year", name: "untilYear", type: "number" }
    ];
    return (
      <div className="Form">
        <Section
          title="Personal Info"
          inputList={personalInputlist}
        />
        <Section
          title="Experience"
          inputList={expInputList}
          addable={true}
        />
        <Section
          title="Education"
          inputList={eduInputList}
          addable={true}
        />
      </div>
    );
  }
}

export default Form;