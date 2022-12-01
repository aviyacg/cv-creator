import '../styles/App.css';
import Header from './Header';
import Form from './Form';
import { Component } from 'react';
import { v4 as newId } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: [
        {
          id: newId(),
          info: {},
        },
      ],
      experience: [
        {
          id: newId(),
          info: {},
        },
      ],
      education: [
        {
          id: newId(),
          info: {},
        },
      ],
    };

    this.addGroup = this.addGroup.bind(this);
    this.changeInfo = this.changeInfo.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
  }

  addGroup({ sectionName, groupId }) {
    // get section
    const section = this.state[sectionName];
    if (section === undefined) return;
    // look for group
    const group = section.find(group => group.id === groupId);
    if (group === undefined) {
      // create group if doesnt exist
      section.push({
        id: groupId,
        info: {},
      });
    }
  }

  changeInfo({ sectionName, groupId, name, value }) {
    // get section
    const section = this.state[sectionName];
    if (section === undefined) return;
    // get group
    const group = section.find(group => group.id === groupId);
    if (group === undefined) {
      // create group if doesnt exist
      section.push({
        id: groupId,
        info: {[name]: value},
      });
    }
    else {
      // update if group exist
      group.info[name] = value;
    }
    // update state 
    this.setState({ [sectionName]: section });
  }

  deleteGroup({ sectionName, groupId }) {
    // get section
    const section = this.state[sectionName];
    if (section === undefined) return;
    // get group
    const groupIndex = section.findIndex(group => group.id === groupId);
    if (groupIndex === -1) return;
    // delete group
    section.splice(groupIndex, 1);
    // update state
    this.setState({ [sectionName]: section });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form
          state={this.state}
          addGroup={this.addGroup}
          changeInfo={this.changeInfo}
          deleteGroup={this.deleteGroup}
        />
      </div>
    );
  }
}

export default App;
