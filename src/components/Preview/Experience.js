import { Component } from "react";

class Experience extends Component {
  render() {
    const { experience } = this.props;
    return (
      <div className="Experience">
        <div className="title">Experience</div>
        {
          experience.map(group => (
            <div key={group.id} className="exp-info">
              <div className="sub-title">{group.info.fromYear + '-' + group.info.untilYear}</div>
              <div className="sub-title">{group.info.position}</div>
              <div className="text">{group.info.company + ', ' + group.info.city}</div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Experience;