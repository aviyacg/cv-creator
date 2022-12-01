import { Component } from "react";
import Section from "./Section";

import "../styles/Form.css";


class Form extends Component {
  constructor(props) {
    super(props);

    this.addExp = this.addExp.bind(this);
    this.addEdu = this.addEdu.bind(this);
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

  addExp({ groupId }) {
    const { addGroup } = this.props;
    const sectionName = 'experience';
    addGroup(sectionName, groupId);
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

  addEdu({ groupId }) {
    const { addGroup } = this.props;
    const sectionName = 'education';
    addGroup(sectionName, groupId);
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
    // input lists for rendering each section input groups
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
      { placeHolder: "Institution", name: "institution" },
      { placeHolder: "City", name: "city" },
      { placeHolder: "Degree", name: "degree" },
      { placeHolder: "Subject", name: "subject" },
      { placeHolder: "From year", name: "fromYear", type: "number" },
      { placeHolder: "Until year", name: "untilYear", type: "number" }
    ];
    // sectionStates for rendering input groups values
    const { personal, experience, education } = this.props.state;
    return (
      <div className="Form">
        <Section
          title="Personal Info"
          inputList={personalInputlist}
          sectionState={personal}
          changeInfo={this.changePersonal}
        />
        <Section
          title="Experience"
          inputList={expInputList}
          sectionState={experience}
          addable={true}
          addGroup={this.addExp}
          changeInfo={this.changeExp}
          deleteGroup={this.deleteExp}
        />
        <Section
          title="Education"
          inputList={eduInputList}
          sectionState={education}
          addable={true}
          addGroup={this.addEdu}
          changeInfo={this.changeEdu}
          deleteGroup={this.deleteEdu}
        />
      </div>
    );
  }
}

export default Form;