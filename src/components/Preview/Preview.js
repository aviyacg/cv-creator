import Main from "./Main";
import Details from "./Details";

import '../../styles/Preview.css';

function Preview(props) {
    const { personal, experience, education } = props;
    const fullName = personal.firstName + ' ' + personal.lastName;
    const description = personal.description;
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

export default Preview;