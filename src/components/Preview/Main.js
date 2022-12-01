import { Component } from "react";
import Description from "./Description";
import Experience from "./Experience";
import Education from "./Education";

import '../../styles/Main.css';

class Main extends Component {
  render() {
    const { description, experience, education } = this.props;

    return (
      <div className="Main">
        <Description description={description} />
        <Experience experience={experience} />
        <Education education={education} />
      </div>
    );
  }
}

export default Main;