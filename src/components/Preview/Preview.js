import { Component } from "react";
import Main from "./Main";
import Details from "./Details";

class Preview extends Component {
  render() {
    const { personal, experience, education } = this.props.state;
    const fullName = personal[0].info.firstName + ' ' + personal[0].info.lastName;
    const description = personal[0].info.description;
    return (
      <div className="Preview">
        <div className="Header">
          {fullName}
        </div>
        <Main
          description={description}
          experience={experience}
          education={education}
        />
        <Details
          personal={personal}
        />
      </div>
    );
  }
}

export default Preview;