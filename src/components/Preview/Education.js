import { Component } from "react";

class Education extends Component {
  render() {
    const { education } = this.props;
    return (
      <div className="Education">
        <div className="title">Education</div>
        {
          education.map(group => (
            <div key={group.id} className="edu-info">
              <div className="sub-title">{group.info.fromYear + '-' + group.info.untilYear}</div>
              <div className="sub-title">{group.info.institution + ', ' + group.info.city}</div>
              <div className="text">{'Degree: ' + group.info.degree}</div>
              <div className="text">{'Subject: ' + group.info.subject}</div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Education;