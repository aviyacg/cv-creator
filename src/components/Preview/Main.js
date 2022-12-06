import Description from "./Description";
import Experience from "./Experience";
import Education from "./Education";

import '../../styles/Main.css';

function Main(props) {
  const { description, experience, education } = props;

  return (
    <div className="Main">
      <Description description={description} />
      <Experience experience={experience} />
      <Education education={education} />
    </div>
  );
}

export default Main;