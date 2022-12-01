import { Component } from "react";
import { v4 as newId } from 'uuid';
import InputGroup from "./InputGroup";

import "../styles/Section.css";

class Section extends Component {
  constructor(props) {
    super(props);
    this.addable = props.addable ? true : false;
  }

  render() {
    const { title, inputList, sectionState, addGroup, changeInfo, deleteGroup } = this.props;
    return (
      <div className="Section">
        <div className="title">
          {title}
        </div>
        {
          sectionState.map(group => (
            <InputGroup
              key={group.id}
              id={group.id}
              inputList={inputList}
              changeInfo={changeInfo}
              deleteable={this.addable}
              deleteGroup={deleteGroup}
            />)
        )}
        {
          this.addable ?
            <button onClick={() => { addGroup(newId()) }}>
              Add
            </button> :
            undefined
        }
      </div>
    );
  }
}

export default Section;